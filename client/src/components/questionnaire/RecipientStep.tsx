import { useState } from 'react';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import QuestionnaireStep from './QuestionnaireStep';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Briefcase, Smile, Users, MoreHorizontal, User } from 'lucide-react';

interface RelationshipOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function RecipientStep({ onNext }: { onNext: () => void }) {
  const { formData, updateFormData } = useQuestionnaire();
  
  const relationshipOptions: RelationshipOption[] = [
    { value: 'family', label: 'Family', icon: <User className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'friend', label: 'Friend', icon: <Smile className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'romantic', label: 'Romantic', icon: <Heart className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'colleague', label: 'Colleague', icon: <Briefcase className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'acquaintance', label: 'Acquaintance', icon: <Users className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
    { value: 'other', label: 'Other', icon: <MoreHorizontal className="text-2xl text-gray-400 group-hover:text-primary mb-2" /> },
  ];

  const [selectedRelationship, setSelectedRelationship] = useState<string>(formData.recipientRelationship || '');

  const handleSelectRelationship = (value: string) => {
    setSelectedRelationship(value);
    updateFormData({ recipientRelationship: value });
  };

  return (
    <QuestionnaireStep 
      title="Tell us who you're shopping for" 
      onNext={onNext}
      showBackButton={false}
    >
      <div className="mb-6">
        <Label className="block text-neutral-dark font-medium mb-2">Who is this gift for?</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {relationshipOptions.map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="outline"
              className={`border-2 ${
                selectedRelationship === option.value 
                  ? 'border-primary text-primary' 
                  : 'border-gray-200 hover:border-primary'
              } rounded-lg p-4 flex flex-col items-center justify-center transition group h-auto`}
              onClick={() => handleSelectRelationship(option.value)}
            >
              {option.icon}
              <span className="font-medium">{option.label}</span>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="recipient-name" className="block text-neutral-dark font-medium mb-2">
            Recipient's Name
          </Label>
          <Input 
            id="recipient-name" 
            value={formData.recipientName || ''}
            onChange={(e) => updateFormData({ recipientName: e.target.value })}
            placeholder="Their name"
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="recipient-age" className="block text-neutral-dark font-medium mb-2">
            Recipient's Age
          </Label>
          <Select 
            value={formData.recipientAge || ''} 
            onValueChange={(value) => updateFormData({ recipientAge: value })}
          >
            <SelectTrigger id="recipient-age">
              <SelectValue placeholder="Select age range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="child">Under 12</SelectItem>
              <SelectItem value="teen">13-17</SelectItem>
              <SelectItem value="young-adult">18-24</SelectItem>
              <SelectItem value="adult">25-40</SelectItem>
              <SelectItem value="middle-age">41-60</SelectItem>
              <SelectItem value="senior">60+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mb-8">
        <Label className="block text-neutral-dark font-medium mb-2">Recipient's Gender</Label>
        <RadioGroup 
          value={formData.recipientGender || ''} 
          onValueChange={(value) => updateFormData({ recipientGender: value })}
          className="flex flex-wrap gap-3"
        >
          <div className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="male" id="gender-male" className="mr-2" />
            <Label htmlFor="gender-male">Male</Label>
          </div>
          <div className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="female" id="gender-female" className="mr-2" />
            <Label htmlFor="gender-female">Female</Label>
          </div>
          <div className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="non-binary" id="gender-non-binary" className="mr-2" />
            <Label htmlFor="gender-non-binary">Non-binary</Label>
          </div>
          <div className="flex items-center border border-gray-200 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50">
            <RadioGroupItem value="prefer-not-to-say" id="gender-prefer-not-to-say" className="mr-2" />
            <Label htmlFor="gender-prefer-not-to-say">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>
    </QuestionnaireStep>
  );
}
