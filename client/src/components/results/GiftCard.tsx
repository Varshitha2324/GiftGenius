import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Gift, Image } from 'lucide-react';

interface GiftCardProps {
  gift: {
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    explanation: string;
    category: string;
    url?: string;
  };
  recipientName: string;
}

export default function GiftCard({ gift, recipientName }: GiftCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleBuyNow = () => {
    if (gift.url) {
      window.open(gift.url, '_blank');
    }
  };
  
  // Get a category-based class for the fallback image background
  const getCategoryColorClass = () => {
    const categoryColorMap: Record<string, string> = {
      "technology": "bg-blue-50",
      "home": "bg-emerald-50",
      "personal": "bg-purple-50",
      "hobby": "bg-amber-50",
      "experiences": "bg-rose-50"
    };
    
    return categoryColorMap[gift.category] || "bg-primary/10";
  };

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 animate-scaleIn">
      {/* Image with fallback */}
      {!imageError ? (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={gift.imageUrl} 
            alt={gift.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      ) : (
        <div className={`w-full h-48 ${getCategoryColorClass()} flex items-center justify-center`}>
          <div className="text-center">
            <Gift className="h-12 w-12 mx-auto mb-2 text-primary/50" />
            <p className="text-sm text-primary/70 font-medium">{gift.title}</p>
          </div>
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading font-semibold text-lg text-gray-800">{gift.title}</h3>
          <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded-md text-sm">{gift.price}</span>
        </div>
        <p className="text-neutral-dark text-sm mb-4">{gift.description}</p>
        
        <div className="bg-primary/5 p-3 rounded-lg mb-4">
          <h4 className="font-heading text-sm font-medium mb-1 flex items-center">
            <Heart size={14} className="mr-1 text-primary/70" />
            Why This Matches {recipientName}:
          </h4>
          <p className="text-xs text-neutral-dark italic">{gift.explanation}</p>
        </div>
        
        <div className="flex justify-between gap-3">
          <Button 
            variant="outline" 
            className={`border-primary ${isSaved ? 'bg-primary text-white' : 'text-primary'} hover:bg-primary hover:text-white transition-colors`}
            onClick={toggleSave}
          >
            <Heart className={`mr-1 ${isSaved ? 'fill-current' : ''}`} size={16} />
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex-1" onClick={handleBuyNow}>
            <ShoppingCart className="mr-1" size={16} />
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
