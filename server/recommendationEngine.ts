import { FormData } from "@shared/schema";
import { GiftItem, giftDatabase, giftImages } from "./giftData";

interface ScoredGift {
  gift: GiftItem;
  score: number;
  priceIndex: number; // Index to use for the price (based on budget)
}

interface GiftRecommendation {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  explanation: string;
  category: string;
  url: string;
}

export function generateRecommendations(formData: FormData): GiftRecommendation[] {
  // Score all gifts based on matching criteria
  const scoredGifts = scoreGifts(formData);
  
  // Select top 6 gifts
  const topGifts = scoredGifts.slice(0, 6);
  
  // Generate detailed recommendations for the top gifts
  return topGifts.map((scoredGift, index) => {
    return {
      title: scoredGift.gift.title,
      price: scoredGift.gift.priceRange[scoredGift.priceIndex],
      description: scoredGift.gift.description,
      imageUrl: giftImages[index % giftImages.length],
      explanation: generateExplanation(scoredGift.gift, formData),
      category: scoredGift.gift.category,
      url: generateFakeUrl(scoredGift.gift.title)
    };
  });
}

function scoreGifts(formData: FormData): ScoredGift[] {
  const scoredGifts: ScoredGift[] = [];
  const budgetIndex = getBudgetIndex(formData.budget);
  
  // Score each gift based on matching criteria
  for (const gift of giftDatabase) {
    let score = 0;
    
    // Check if gift is suitable for the age range
    if (gift.ageRanges.includes(formData.recipientAge)) {
      score += 10;
    }
    
    // Check if gift is appropriate for the occasion
    if (gift.occasions.includes(formData.occasion)) {
      score += 15;
    }
    
    // Check if gift matches interests
    for (const interest of formData.interests) {
      if (gift.interests.includes(interest)) {
        score += 20;
      }
    }
    
    // Check if other interests match
    if (formData.otherInterests) {
      const otherInterestsList = formData.otherInterests.toLowerCase().split(',').map(i => i.trim());
      for (const otherInterest of otherInterestsList) {
        for (const giftInterest of gift.interests) {
          if (giftInterest.toLowerCase().includes(otherInterest) || otherInterest.includes(giftInterest.toLowerCase())) {
            score += 10;
          }
        }
      }
    }
    
    // Check if gift matches preferred gift types
    if (formData.giftTypes && formData.giftTypes.length > 0) {
      for (const giftType of formData.giftTypes) {
        if (gift.giftTypes.includes(giftType)) {
          score += 15;
        }
      }
    }
    
    // Check if gift is in the appropriate price range
    if (budgetIndex >= 0 && budgetIndex < gift.priceRange.length) {
      score += 25; // Strong match for budget
    } else if (budgetIndex > 0 && budgetIndex - 1 < gift.priceRange.length) {
      score += 10; // Lower price than budget, potentially ok
    } else {
      score -= 50; // Out of budget, significant penalty
    }
    
    // Check if gift might be in the avoid list
    if (formData.avoid) {
      const avoidList = formData.avoid.toLowerCase().split(',').map(i => i.trim());
      
      for (const avoidItem of avoidList) {
        if (
          gift.title.toLowerCase().includes(avoidItem) ||
          gift.description.toLowerCase().includes(avoidItem) ||
          gift.category.toLowerCase().includes(avoidItem)
        ) {
          score -= 100; // Strong penalty for specifically avoided items
        }
      }
    }
    
    // Calculate final price index (bounded by available prices)
    const priceIndex = Math.min(Math.max(0, budgetIndex), gift.priceRange.length - 1);
    
    scoredGifts.push({
      gift,
      score,
      priceIndex
    });
  }
  
  // Sort gifts by score (highest first)
  return scoredGifts.sort((a, b) => b.score - a.score);
}

function getBudgetIndex(budget: string): number {
  switch (budget) {
    case "Under $25":
      return 0;
    case "$25-$50":
      return 1;
    case "$50-$100":
      return 2;
    case "$100-$250":
      return 3;
    case "$250+":
      return 4;
    default:
      return 2; // Default to middle range if not specified
  }
}

function generateExplanation(gift: GiftItem, formData: FormData): string {
  const name = formData.recipientName || "them";
  let explanation = gift.baseExplanation;
  
  // Add interest-based explanation
  const matchingInterests = formData.interests.filter(interest => 
    gift.interests.includes(interest)
  );
  
  if (matchingInterests.length > 0) {
    explanation += ` It aligns with ${name}'s interest in ${matchingInterests.join(' and ')}.`;
  }
  
  // Add occasion-specific explanation
  if (gift.occasions.includes(formData.occasion)) {
    const occasionExplanations: {[key: string]: string} = {
      'birthday': `It's a thoughtful ${formData.occasion} gift that shows you care about their personal interests.`,
      'anniversary': `It's a meaningful ${formData.occasion} gift that celebrates your special relationship.`,
      'wedding': `It's a practical yet thoughtful ${formData.occasion} gift that they can enjoy together.`,
      'graduation': `It's a perfect ${formData.occasion} gift that celebrates this important milestone.`,
      'holiday': `It makes an excellent ${formData.occasion} gift that stands out from typical presents.`,
      'just-because': `It's a spontaneous gift that shows you're thinking of them.`
    };
    
    explanation += ` ${occasionExplanations[formData.occasion] || ''}`;
  }
  
  // Add personality-based explanation if available
  if (formData.personality) {
    const personality = formData.personality.toLowerCase();
    if (personality.includes('creative') || personality.includes('artistic')) {
      explanation += ` Perfect for their creative and artistic personality.`;
    } else if (personality.includes('practical') || personality.includes('organized')) {
      explanation += ` Matches their practical and organized approach to life.`;
    } else if (personality.includes('adventurous') || personality.includes('outgoing')) {
      explanation += ` Complements their adventurous and outgoing spirit.`;
    } else if (personality.includes('quiet') || personality.includes('thoughtful')) {
      explanation += ` Aligns with their thoughtful and reflective nature.`;
    }
  }
  
  return explanation;
}

function generateFakeUrl(title: string): string {
  // Create plausible but fake product URLs
  const stores = [
    'amazon.com', 
    'uncommongoods.com', 
    'etsy.com', 
    'bestbuy.com', 
    'williams-sonoma.com',
    'rei.com',
    'target.com',
    'nordstrom.com',
    'macy.com'
  ];
  
  const store = stores[Math.floor(Math.random() * stores.length)];
  const slugTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const productId = Math.floor(Math.random() * 1000000);
  
  return `https://www.${store}/product/${slugTitle}-${productId}`;
}