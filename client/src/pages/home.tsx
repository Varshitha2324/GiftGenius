import { Link, useLocation } from 'wouter';
import { WandSparkles, Clock, SmilePlus, ArrowRight, Gift, Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [, setLocation] = useLocation();

  const startQuestionnaire = () => {
    setLocation('/questionnaire');
  };

  const testimonials = [
    {
      name: "Sarah J.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Found the perfect anniversary gift for my husband who's impossible to shop for. The personalized recommendations were spot on!"
    },
    {
      name: "Michael T.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 4.5,
      text: "Used this for my mom's birthday and she loved every suggestion. Saved me hours of browsing online stores!"
    },
    {
      name: "Lisa K.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I'm terrible at picking gifts, but this platform made it so easy! The questionnaire was quick and the suggestions were incredibly thoughtful."
    }
  ];

  return (
    <div id="landing-page">
      <div className="grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="order-2 md:order-1 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Find the <span className="text-primary">Perfect Gift</span> Every Time!
          </h1>
          <p className="text-lg mb-8 text-neutral-dark max-w-lg">
            Our AI-powered platform analyzes your recipient's personality, preferences, and the occasion to recommend truly meaningful gifts they'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              onClick={startQuestionnaire} 
              className="flex items-center"
            >
              <WandSparkles className="mr-2" />
              Start Questionnaire
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-white"
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-dark">
            <Clock size={16} />
            <span>Takes only 2 minutes</span>
            <span className="mx-2">•</span>
            <SmilePlus size={16} />
            <span>98% satisfaction rate</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Colorful wrapped gift boxes" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div id="how-it-works" className="py-16 bg-white rounded-2xl px-6 my-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center flex flex-col items-center animate-slideUp">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl text-primary h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Answer Questions</h3>
            <p className="text-neutral-dark">Share details about your gift recipient's personality, interests, and the occasion.</p>
          </div>
          <div className="text-center flex flex-col items-center animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl text-secondary h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">AI Analysis</h3>
            <p className="text-neutral-dark">Our AI analyzes thousands of potential gifts to find perfect matches.</p>
          </div>
          <div className="text-center flex flex-col items-center animate-slideUp" style={{animationDelay: '0.4s'}}>
            <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Gift className="text-2xl text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Get Recommendations</h3>
            <p className="text-neutral-dark">Receive personalized gift suggestions with explanations on why they'll be loved.</p>
          </div>
        </div>
      </div>

      <div id="testimonials" className="py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                    <div className="flex text-accent">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <Star key={i} className="fill-current" size={16} />
                      ))}
                      {testimonial.rating % 1 === 0.5 && (
                        <StarHalf className="fill-current" size={16} />
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-dark italic">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
