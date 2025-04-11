import { createContext, useState, useContext, ReactNode } from 'react';
import { FormData, formDataSchema } from '@shared/schema';

interface QuestionnaireContextType {
  currentStep: number;
  totalSteps: number;
  formData: Partial<FormData>;
  recommendations: any[];
  isLoading: boolean;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  setRecommendations: (recommendations: any[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  validateCurrentStep: () => { isValid: boolean; errors?: Record<string, string> };
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined);

const TOTAL_STEPS = 5;

const initialFormData: Partial<FormData> = {
  interests: [],
  giftTypes: [],
  savePreferences: false,
  emailUpdates: false,
};

export const QuestionnaireProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>(initialFormData);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < TOTAL_STEPS) {
      setCurrentStep(step);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setRecommendations([]);
  };

  const validateCurrentStep = () => {
    try {
      // Partial validation based on current step
      switch (currentStep) {
        case 0: // Recipient step
          const recipientSchema = formDataSchema.pick({
            recipientName: true,
            recipientRelationship: true,
            recipientAge: true,
            recipientGender: true,
          });
          recipientSchema.parse(formData);
          break;
        case 1: // Occasion step
          const occasionSchema = formDataSchema.pick({
            occasion: true,
            budget: true,
          });
          occasionSchema.parse(formData);
          break;
        case 2: // Interests step
          const interestsSchema = formDataSchema.pick({
            interests: true,
          });
          interestsSchema.parse(formData);
          break;
        // For steps 3 and 4, all fields are optional
      }
      
      return { isValid: true };
    } catch (error: any) {
      const errors: Record<string, string> = {};
      if (error.errors) {
        error.errors.forEach((err: any) => {
          const path = err.path.join('.');
          errors[path] = err.message;
        });
      }
      
      return { isValid: false, errors };
    }
  };

  return (
    <QuestionnaireContext.Provider
      value={{
        currentStep,
        totalSteps: TOTAL_STEPS,
        formData,
        recommendations,
        isLoading,
        updateFormData,
        nextStep,
        prevStep,
        goToStep,
        resetForm,
        setRecommendations,
        setIsLoading,
        validateCurrentStep,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (context === undefined) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  return context;
};
