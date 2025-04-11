import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

interface GiftCardProps {
  gift: {
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    explanation: string;
    url?: string;
  };
  recipientName: string;
}

export default function GiftCard({ gift, recipientName }: GiftCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleBuyNow = () => {
    if (gift.url) {
      window.open(gift.url, '_blank');
    }
  };

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
      <img 
        src={gift.imageUrl} 
        alt={gift.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading font-semibold text-lg">{gift.title}</h3>
          <span className="font-bold text-primary">{gift.price}</span>
        </div>
        <p className="text-neutral-dark text-sm mb-4">{gift.description}</p>
        
        <div className="bg-neutral-light p-3 rounded-lg mb-4">
          <h4 className="font-accent text-sm font-medium mb-1">Why This Matches {recipientName}:</h4>
          <p className="text-xs text-neutral-dark italic">{gift.explanation}</p>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            className={`border-primary ${isSaved ? 'bg-primary text-white' : 'text-primary'} hover:bg-primary hover:text-white`}
            onClick={toggleSave}
          >
            <Heart className={`mr-1 ${isSaved ? 'fill-current' : ''}`} size={16} />
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          <Button onClick={handleBuyNow}>
            <ShoppingCart className="mr-1" size={16} />
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
