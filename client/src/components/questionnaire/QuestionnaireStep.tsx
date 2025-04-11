import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionnaireStepProps {
  title: string;
  children: ReactNode;
  onNext: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
  showBackButton?: boolean;
}

export default function QuestionnaireStep({
  title,
  children,
  onNext,
  onBack,
  isLastStep = false,
  showBackButton = true
}: QuestionnaireStepProps) {
  return (
    <div className="questionnaire-step">
      <h2 className="text-2xl font-heading font-bold mb-6">{title}</h2>
      
      {children}
      
      <div className="flex justify-between mt-8">
        {showBackButton && onBack && (
          <Button 
            variant="outline" 
            onClick={onBack}
            className="flex items-center border-gray-300 text-neutral-dark hover:bg-gray-50"
          >
            <ArrowLeft className="mr-1" size={18} />
            Back
          </Button>
        )}
        
        {!showBackButton && <div></div>}
        
        <Button 
          onClick={onNext}
          className="flex items-center"
        >
          {isLastStep ? 'Get Gift Recommendations' : 'Continue'}
          {!isLastStep && <ArrowRight className="ml-1" size={18} />}
        </Button>
      </div>
    </div>
  );
}
