import { useState } from 'react';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import QuestionnaireStep from './QuestionnaireStep';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface GiftTypeOption {
  id: string;
  label: string;
}

export default function PreferencesStep({ 
  onNext, 
  onBack 
}: { 
  onNext: () => void; 
  onBack: () => void;
}) {
  const { formData, updateFormData } = useQuestionnaire();
  
  const giftTypeOptions: GiftTypeOption[] = [
    { id: 'practical', label: 'Practical' },
    { id: 'sentimental', label: 'Sentimental' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'handmade', label: 'Handmade' },
    { id: 'unique', label: 'Unique' },
  ];

  const [selectedGiftTypes, setSelectedGiftTypes] = useState<string[]>(
    formData.giftTypes || []
  );

  const handleGiftTypeChange = (giftType: string, checked: boolean) => {
    let updatedGiftTypes;
    
    if (checked) {
      updatedGiftTypes = [...selectedGiftTypes, giftType];
    } else {
      updatedGiftTypes = selectedGiftTypes.filter(i => i !== giftType);
    }
    
    setSelectedGiftTypes(updatedGiftTypes);
    updateFormData({ giftTypes: updatedGiftTypes });
  };

  return (
    <QuestionnaireStep 
      title="Any gift preferences?" 
      onNext={onNext}
      onBack={onBack}
    >
      <div className="mb-6">
        <Label className="block text-neutral-dark font-medium mb-2">
          What type of gifts do they prefer?
        </Label>
        <div className="grid grid-cols-2 gap-3">
          {giftTypeOptions.map((option) => (
            <div 
              key={option.id}
              className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <Checkbox 
                id={`gift-type-${option.id}`}
                checked={selectedGiftTypes.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleGiftTypeChange(option.id, checked as boolean)
                }
                className="mr-2"
              />
              <Label 
                htmlFor={`gift-type-${option.id}`}
                className="cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="avoid" className="block text-neutral-dark font-medium mb-2">
          Anything to avoid?
        </Label>
        <Textarea 
          id="avoid"
          value={formData.avoid || ''}
          onChange={(e) => updateFormData({ avoid: e.target.value })}
          placeholder="E.g., allergies, dislikes, etc."
          className="w-full"
          rows={2}
        />
      </div>
      
      <div className="mb-8">
        <Label htmlFor="previous-gifts" className="block text-neutral-dark font-medium mb-2">
          Past successful gifts they've enjoyed
        </Label>
        <Textarea 
          id="previous-gifts"
          value={formData.previousGifts || ''}
          onChange={(e) => updateFormData({ previousGifts: e.target.value })}
          placeholder="What gifts have they loved in the past?"
          className="w-full"
          rows={2}
        />
      </div>
    </QuestionnaireStep>
  );
}
