import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import QuestionnaireStep from './QuestionnaireStep';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Wand2 } from 'lucide-react';

export default function ReviewStep({ 
  onSubmit, 
  onBack 
}: { 
  onSubmit: () => void; 
  onBack: () => void;
}) {
  const { formData, updateFormData } = useQuestionnaire();

  // Format the interests array into a readable string
  const interestsString = formData.interests?.join(', ') || '';
  const giftTypesString = formData.giftTypes?.join(', ') || '';
  
  // Format recipient age for display
  const ageMap: { [key: string]: string } = {
    'child': 'Under 12',
    'teen': '13-17',
    'young-adult': '18-24',
    'adult': '25-40',
    'middle-age': '41-60',
    'senior': '60+'
  };
  
  const displayAge = formData.recipientAge ? ageMap[formData.recipientAge] || formData.recipientAge : '';
  
  return (
    <QuestionnaireStep 
      title="Almost there!" 
      onNext={onSubmit}
      onBack={onBack}
      isLastStep={true}
    >
      <div className="mb-8">
        <div className="bg-secondary bg-opacity-10 p-6 rounded-lg mb-6">
          <h3 className="font-heading font-semibold text-lg mb-2 text-secondary">Review your information</h3>
          <p className="text-neutral-dark mb-4">We'll use these details to find the perfect gift recommendations.</p>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <span className="font-medium block">For:</span>
              {formData.recipientName} ({formData.recipientRelationship})
            </div>
            <div>
              <span className="font-medium block">Age:</span>
              {displayAge}
            </div>
            <div>
              <span className="font-medium block">Occasion:</span>
              {formData.occasion}
            </div>
            <div>
              <span className="font-medium block">Budget:</span>
              {formData.budget}
            </div>
            <div>
              <span className="font-medium block">Interests:</span>
              {interestsString}
            </div>
            <div>
              <span className="font-medium block">Personality:</span>
              {formData.personality || 'Not specified'}
            </div>
            <div>
              <span className="font-medium block">Gift Types:</span>
              {giftTypesString || 'Not specified'}
            </div>
            <div>
              <span className="font-medium block">Things to Avoid:</span>
              {formData.avoid || 'Not specified'}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <Label htmlFor="additional-notes" className="block text-neutral-dark font-medium mb-2">
            Anything else you'd like to share?
          </Label>
          <Textarea 
            id="additional-notes"
            value={formData.additionalNotes || ''}
            onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
            placeholder="Any final details that might help us find the perfect gift"
            className="w-full"
            rows={3}
          />
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Switch 
              id="save-preferences" 
              checked={formData.savePreferences || false}
              onCheckedChange={(checked) => updateFormData({ savePreferences: checked })}
            />
            <Label htmlFor="save-preferences" className="text-sm">
              Save these preferences for future gift recommendations
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="email-updates" 
              checked={formData.emailUpdates || false}
              onCheckedChange={(checked) => updateFormData({ emailUpdates: checked })}
            />
            <Label htmlFor="email-updates" className="text-sm">
              Email me about new gift ideas for this person in the future
            </Label>
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );
}
