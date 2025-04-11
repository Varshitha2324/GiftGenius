import { useLocation } from 'wouter';
import { WandSparkles, Clock, SmilePlus, ArrowRight, Gift, Star, StarHalf, Check, Heart, Sparkles, Search, Presentation, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const occasions = [
    { name: "Birthday", icon: <WandSparkles className="h-5 w-5" /> },
    { name: "Anniversary", icon: <Heart className="h-5 w-5" /> },
    { name: "Wedding", icon: <Gift className="h-5 w-5" /> },
    { name: "Graduation", icon: <Presentation className="h-5 w-5" /> },
    { name: "Holiday", icon: <Sparkles className="h-5 w-5" /> }
  ];

  const features = [
    { 
      title: "Personalized Recommendations", 
      description: "Our smart algorithm matches gifts to your recipient's unique interests and preferences.",
      icon: <Search className="h-5 w-5 text-primary" />
    },
    { 
      title: "Quick & Easy Process", 
      description: "Complete our questionnaire in just 2 minutes and get instant gift suggestions.",
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    { 
      title: "Thoughtful Explanations", 
      description: "Each recommendation comes with a personalized explanation of why it's a good match.",
      icon: <Heart className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <div id="landing-page">
      {/* Hero section with animated gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl mb-16">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>
        <div className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Badge variant="outline" className="mb-6 px-4 py-1 bg-white/80 backdrop-blur-sm font-medium border-primary/20">
                  <Sparkles className="h-4 w-4 mr-1 text-primary" /> Smart Gift Recommendations
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                  Find the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Perfect Gift</span> Every Time!
                </h1>
                <p className="text-lg mb-8 text-neutral-dark/90 max-w-lg">
                  Our intelligent platform analyzes your recipient's personality, preferences, and the occasion to recommend truly meaningful gifts they'll love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    onClick={startQuestionnaire} 
                    className="flex items-center bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    <WandSparkles className="mr-2" />
                    Start Gift Finder
                    <ChevronRight className="ml-1" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-primary/20 text-neutral-dark hover:bg-primary/5"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    See How It Works
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-dark">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-primary" />
                    <span>Takes only 2 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="mr-1 text-primary" />
                    <span>No sign-up required</span>
                  </div>
                  <div className="flex items-center">
                    <SmilePlus size={16} className="mr-1 text-primary" />
                    <span>98% satisfaction rate</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Colorful wrapped gift boxes" 
                  className="relative rounded-2xl shadow-lg w-full h-auto object-cover border border-white/20"
                />
              </div>
            </div>

            {/* Popular occasions */}
            <div className="mt-16 text-center">
              <p className="text-neutral-dark mb-4">Perfect for any occasion:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {occasions.map((occasion, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="flex items-center gap-1 px-4 py-2 bg-white/70 backdrop-blur-sm hover:bg-primary/5 cursor-pointer transition"
                    onClick={startQuestionnaire}
                  >
                    {occasion.icon} {occasion.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1">Why Choose Us</Badge>
            <h2 className="text-3xl font-heading font-bold">Discover the GiftWhisperer Advantage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-100 hover:border-primary/20 hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-dark">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div id="how-it-works" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-white/80">Simple Process</Badge>
            <h2 className="text-3xl font-heading font-bold">How It Works</h2>
            <p className="mt-3 text-neutral-dark max-w-lg mx-auto">Our intelligent recommendation system finds the perfect gifts in just three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl text-primary h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">1. Answer Questions</h3>
              <p className="text-neutral-dark">Share details about your gift recipient's personality, interests, and the special occasion.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl text-secondary h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">2. Intelligent Analysis</h3>
              <p className="text-neutral-dark">Our algorithm analyzes thousands of potential gifts to find the perfect matches for your recipient.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Gift className="text-2xl text-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">3. Get Recommendations</h3>
              <p className="text-neutral-dark">Receive personalized gift suggestions with explanations on why they'll be perfect for your recipient.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              onClick={startQuestionnaire} 
              className="bg-white hover:bg-primary/10 text-primary border border-primary/20"
            >
              Try It Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div id="testimonials" className="py-12 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1">Happy Users</Badge>
            <h2 className="text-3xl font-heading font-bold">What Our Users Say</h2>
            <p className="mt-3 text-neutral-dark max-w-lg mx-auto">Join thousands of satisfied gift-givers who found the perfect presents for their loved ones</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-100 hover:border-primary/20 hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                    />
                    <div>
                      <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                      <div className="flex text-amber-400">
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

      {/* Call to action */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-white mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Find the Perfect Gift?</h2>
          <p className="mb-8 text-white/90 max-w-lg mx-auto">Stop stressing about gift-giving and let our smart recommendation system do the work for you.</p>
          <Button 
            size="lg" 
            onClick={startQuestionnaire} 
            className="bg-white text-primary hover:bg-white/90"
          >
            <WandSparkles className="mr-2" />
            Start Gift Finder
          </Button>
        </div>
      </div>
    </div>
  );
}
