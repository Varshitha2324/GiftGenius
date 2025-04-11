import { useState, useEffect } from 'react';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import QuestionnaireStep from './QuestionnaireStep';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface InterestOption {
  id: string;
  label: string;
}

export default function InterestsStep({ 
  onNext, 
  onBack 
}: { 
  onNext: () => void; 
  onBack: () => void;
}) {
  const { formData, updateFormData } = useQuestionnaire();
  
  const interestOptions: InterestOption[] = [
    { id: 'technology', label: 'Technology' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'outdoors', label: 'Outdoors' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'reading', label: 'Reading' },
    { id: 'music', label: 'Music' },
    { id: 'art', label: 'Art & Creativity' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'beauty', label: 'Beauty & Self-care' },
    { id: 'travel', label: 'Travel' },
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    formData.interests || []
  );

  const handleInterestChange = (interest: string, checked: boolean) => {
    let updatedInterests;
    
    if (checked) {
      updatedInterests = [...selectedInterests, interest];
    } else {
      updatedInterests = selectedInterests.filter(i => i !== interest);
    }
    
    setSelectedInterests(updatedInterests);
    updateFormData({ interests: updatedInterests });
  };

  return (
    <QuestionnaireStep 
      title="What are they interested in?" 
      onNext={onNext}
      onBack={onBack}
    >
      <div className="mb-6">
        <Label className="block text-neutral-dark font-medium mb-2">
          Select their interests (choose all that apply)
        </Label>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {interestOptions.map((option) => (
            <div 
              key={option.id}
              className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <Checkbox 
                id={`interest-${option.id}`}
                checked={selectedInterests.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleInterestChange(option.id, checked as boolean)
                }
                className="mr-2"
              />
              <Label 
                htmlFor={`interest-${option.id}`}
                className="cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        
        <Label htmlFor="other-interests" className="block text-neutral-dark font-medium mb-2">
          Any other interests?
        </Label>
        <Input 
          id="other-interests"
          value={formData.otherInterests || ''}
          onChange={(e) => updateFormData({ otherInterests: e.target.value })}
          placeholder="Separate with commas"
          className="w-full"
        />
      </div>
      
      <div className="mb-8">
        <Label htmlFor="personality" className="block text-neutral-dark font-medium mb-2">
          How would you describe their personality?
        </Label>
        <Textarea 
          id="personality"
          value={formData.personality || ''}
          onChange={(e) => updateFormData({ personality: e.target.value })}
          placeholder="E.g., outgoing, practical, creative, etc."
          className="w-full"
          rows={3}
        />
      </div>
    </QuestionnaireStep>
  );
}
