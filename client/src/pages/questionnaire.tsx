import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

import RecipientStep from '@/components/questionnaire/RecipientStep';
import OccasionStep from '@/components/questionnaire/OccasionStep';
import InterestsStep from '@/components/questionnaire/InterestsStep';
import PreferencesStep from '@/components/questionnaire/PreferencesStep';
import ReviewStep from '@/components/questionnaire/ReviewStep';
import { getGiftRecommendations } from '@/lib/openai';
import { apiRequest } from '@/lib/queryClient';

export default function Questionnaire() {
  const { 
    currentStep, 
    totalSteps, 
    formData, 
    nextStep, 
    prevStep, 
    setIsLoading, 
    setRecommendations,
    validateCurrentStep 
  } = useQuestionnaire();
  
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const goBack = () => {
    if (currentStep === 0) {
      setLocation('/');
    } else {
      prevStep();
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      
      // Send data to the server to generate recommendations
      const response = await apiRequest('POST', '/api/recommendations', formData);
      const data = await response.json();
      
      setRecommendations(data.recommendations);
      setLocation('/results');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while generating recommendations. Please try again.",
        variant: "destructive",
      });
      console.error('Error submitting questionnaire:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const { isValid, errors } = validateCurrentStep();
    
    if (!isValid) {
      // Show first error as toast
      const firstError = Object.values(errors || {})[0];
      toast({
        title: "Validation Error",
        description: firstError || "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === totalSteps - 1) {
      // Final step, submit the form
      handleSubmit();
    } else {
      nextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 my-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <button 
            className="text-neutral-dark hover:text-primary transition flex items-center"
            onClick={goBack}
          >
            <ArrowLeft className="mr-1" size={18} />
            Back
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-dark font-medium">Step {currentStep + 1}</span>
            <span className="text-sm text-neutral-dark">of</span>
            <span className="text-sm text-neutral-dark font-medium">{totalSteps}</span>
          </div>
        </div>
        
        <Progress value={progressPercentage} className="h-2 mb-2" />
      </div>

      {currentStep === 0 && <RecipientStep onNext={handleNext} />}
      {currentStep === 1 && <OccasionStep onNext={handleNext} onBack={prevStep} />}
      {currentStep === 2 && <InterestsStep onNext={handleNext} onBack={prevStep} />}
      {currentStep === 3 && <PreferencesStep onNext={handleNext} onBack={prevStep} />}
      {currentStep === 4 && <ReviewStep onSubmit={handleNext} onBack={prevStep} />}
    </div>
  );
}
