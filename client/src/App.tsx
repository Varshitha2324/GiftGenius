import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useQuestionnaire, QuestionnaireProvider } from "@/contexts/QuestionnaireContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import Questionnaire from "@/pages/questionnaire";
import Results from "@/pages/results";
import LoadingView from "@/components/LoadingView";
import NotFound from "@/pages/not-found";

function Router() {
  const { isLoading } = useQuestionnaire();
  
  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/questionnaire" component={Questionnaire} />
      <Route path="/results" component={Results} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuestionnaireProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </QuestionnaireProvider>
    </QueryClientProvider>
  );
}

export default App;
