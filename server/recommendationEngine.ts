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

  // Create a stable mapping of gift categories to images
  const categoryImageMap: Record<string, string> = {
    "technology": giftImages[0],
    "home": giftImages[1],
    "personal": giftImages[2],
    "hobby": giftImages[3],
    "experiences": giftImages[4]
  };
  
  // Map specific interests to images for more context-appropriate images
  const interestImageMap: Record<string, string> = {
    "music": giftImages[5],
    "art": giftImages[6],
    "cooking": giftImages[7],
    "reading": giftImages[8],
    "travel": giftImages[9],
    "fitness": giftImages[10],
    "outdoors": giftImages[11],
    "beauty": giftImages[1],  // Reusing some images is fine
    "gaming": giftImages[3]
  };
  
  // Generate detailed recommendations for the top gifts
  return topGifts.map((scoredGift) => {
    // Try to find an image based on the gift's primary interest
    let imageUrl = giftImages[0]; // Default image if no matches
    
    // First try to match by primary interest
    const primaryInterest = scoredGift.gift.interests[0];
    if (primaryInterest && interestImageMap[primaryInterest]) {
      imageUrl = interestImageMap[primaryInterest];
    } 
    // Otherwise fall back to category
    else if (categoryImageMap[scoredGift.gift.category]) {
      imageUrl = categoryImageMap[scoredGift.gift.category];
    }
    
    return {
      title: scoredGift.gift.title,
      price: scoredGift.gift.priceRange[scoredGift.priceIndex],
      description: scoredGift.gift.description,
      imageUrl: imageUrl, // Use the contextually appropriate image
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
    let isDisqualified = false;
    
    // CRITICAL CRITERIA - must match or gift is disqualified
    
    // Check if gift is suitable for the age range (critical match)
    if (!gift.ageRanges.includes(formData.recipientAge)) {
      isDisqualified = true;
    }
    
    // Check if gift is appropriate for the occasion (critical match)
    if (!gift.occasions.includes(formData.occasion)) {
      isDisqualified = true;
    }
    
    // Check if gift is far outside budget (critical)
    if (budgetIndex === 0 && gift.priceRange[0] !== "Under $25" && !gift.priceRange.includes("$25-$50")) {
      isDisqualified = true; // Too expensive for lowest budget
    } else if (budgetIndex === 4 && !gift.priceRange.includes("$250+") && 
              !gift.priceRange.includes("$100-$250")) {
      isDisqualified = true; // Too cheap for highest budget expectations
    }
    
    // Check if gift is in avoid list (critical)
    if (formData.avoid) {
      const avoidList = formData.avoid.toLowerCase().split(',').map(i => i.trim());
      
      for (const avoidItem of avoidList) {
        if (
          gift.title.toLowerCase().includes(avoidItem) ||
          gift.description.toLowerCase().includes(avoidItem) ||
          gift.category.toLowerCase().includes(avoidItem) ||
          gift.interests.some(interest => interest.toLowerCase().includes(avoidItem))
        ) {
          isDisqualified = true;
          break;
        }
      }
    }
    
    // If disqualified, skip scoring
    if (isDisqualified) {
      continue;
    }
    
    // SCORING CRITERIA - enhance score for better matches
    
    // Interest matching - highest priority
    let interestMatchCount = 0;
    for (const interest of formData.interests) {
      if (gift.interests.includes(interest)) {
        score += 30; // Increased from 20
        interestMatchCount++;
      }
    }
    
    // Bonus for matching multiple interests
    if (interestMatchCount > 1) {
      score += interestMatchCount * 15; // Additional bonus for each matched interest
    }
    
    // Exact budget match is preferred
    if (gift.priceRange.includes(formData.budget)) {
      score += 25; // Strong match for budget
    } else if (budgetIndex > 0 && gift.priceRange.includes(getBudgetString(budgetIndex - 1))) {
      score += 10; // Lower price than budget, potentially ok
    } else {
      score -= 15; // Not ideal price match
    }
    
    // Other interests
    if (formData.otherInterests) {
      const otherInterestsList = formData.otherInterests.toLowerCase().split(',').map(i => i.trim());
      let otherInterestMatchCount = 0;
      
      for (const otherInterest of otherInterestsList) {
        for (const giftInterest of gift.interests) {
          if (giftInterest.toLowerCase().includes(otherInterest) || otherInterest.includes(giftInterest.toLowerCase())) {
            score += 10;
            otherInterestMatchCount++;
            break; // Only count one match per interest
          }
        }
      }
      
      // Bonus for matching multiple other interests
      if (otherInterestMatchCount > 1) {
        score += otherInterestMatchCount * 5;
      }
    }
    
    // Check if gift matches preferred gift types
    if (formData.giftTypes && formData.giftTypes.length > 0) {
      let giftTypeMatchCount = 0;
      for (const giftType of formData.giftTypes) {
        if (gift.giftTypes.includes(giftType)) {
          score += 15;
          giftTypeMatchCount++;
        }
      }
      
      // Bonus for matching multiple preferred gift types
      if (giftTypeMatchCount > 1) {
        score += giftTypeMatchCount * 10;
      }
    }
    
    // Personality matching
    if (formData.personality) {
      const personality = formData.personality.toLowerCase();
      
      // Creative/artistic personality
      if ((personality.includes('creative') || personality.includes('artistic')) 
          && (gift.interests.includes('art') || gift.giftTypes.includes('handmade'))) {
        score += 20;
      }
      
      // Practical/organized personality
      if ((personality.includes('practical') || personality.includes('organized')) 
          && gift.giftTypes.includes('practical')) {
        score += 20;
      }
      
      // Adventurous personality
      if ((personality.includes('adventurous') || personality.includes('outgoing')) 
          && (gift.interests.includes('outdoors') || gift.interests.includes('travel') || gift.giftTypes.includes('experiences'))) {
        score += 20;
      }
      
      // Thoughtful personality
      if ((personality.includes('quiet') || personality.includes('thoughtful')) 
          && (gift.giftTypes.includes('sentimental') || gift.interests.includes('reading'))) {
        score += 20;
      }
      
      // Luxury-oriented personality
      if (personality.includes('luxury') && gift.giftTypes.includes('luxury')) {
        score += 20;
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

// Helper function to convert budget index back to string
function getBudgetString(index: number): string {
  switch (index) {
    case 0:
      return "Under $25";
    case 1:
      return "$25-$50";
    case 2:
      return "$50-$100";
    case 3:
      return "$100-$250";
    case 4:
      return "$250+";
    default:
      return "$50-$100"; // Default to middle range
  }
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