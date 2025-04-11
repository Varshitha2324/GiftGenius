import { useState } from 'react';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import QuestionnaireStep from './QuestionnaireStep';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Heart, Gift, GraduationCap, CandyCane, SmilePlus } from 'lucide-react';

interface OccasionOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function OccasionStep({ 
  onNext, 
  onBack 
}: { 
  onNext: () => void; 
  onBack: () => void;
}) {
  const { formData, updateFormData } = useQuestionnaire();
  
  const occasionOptions: OccasionOption[] = [
    { value: 'birthday', label: 'Birthday', icon: <Cake className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'anniversary', label: 'Anniversary', icon: <Heart className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'wedding', label: 'Wedding', icon: <Gift className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'graduation', label: 'Graduation', icon: <GraduationCap className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'holiday', label: 'Holiday', icon: <CandyCane className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'just-because', label: 'Just Because', icon: <SmilePlus className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
  ];

  const [selectedOccasion, setSelectedOccasion] = useState<string>(formData.occasion || '');

  const handleSelectOccasion = (value: string) => {
    setSelectedOccasion(value);
    updateFormData({ occasion: value });
  };

  return (
    <QuestionnaireStep 
      title="What's the occasion?" 
      onNext={onNext}
      onBack={onBack}
    >
      <div className="mb-8">
        <Label className="block text-neutral-dark font-medium mb-2">Select the occasion</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {occasionOptions.map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="outline"
              className={`border-2 ${
                selectedOccasion === option.value 
                  ? 'border-primary text-primary' 
                  : 'border-gray-200 hover:border-primary'
              } rounded-lg p-4 flex flex-col items-center justify-center transition group h-auto`}
              onClick={() => handleSelectOccasion(option.value)}
            >
              {option.icon}
              <span className="font-medium">{option.label}</span>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <Label htmlFor="budget" className="block text-neutral-dark font-medium mb-2">
          What's your budget?
        </Label>
        <Select 
          value={formData.budget || ''} 
          onValueChange={(value) => updateFormData({ budget: value })}
        >
          <SelectTrigger id="budget">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Under $25">Under $25</SelectItem>
            <SelectItem value="$25-$50">$25-$50</SelectItem>
            <SelectItem value="$50-$100">$50-$100</SelectItem>
            <SelectItem value="$100-$250">$100-$250</SelectItem>
            <SelectItem value="$250+">$250+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-8">
        <Label htmlFor="occasion-date" className="block text-neutral-dark font-medium mb-2">
          When do you need this gift by?
        </Label>
        <Input 
          type="date" 
          id="occasion-date"
          value={formData.occasionDate || ''}
          onChange={(e) => updateFormData({ occasionDate: e.target.value })}
          className="w-full"
        />
      </div>
    </QuestionnaireStep>
  );
}
