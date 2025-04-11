import { Gift, Sparkles, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    setMobileMenuOpen(false);
  };
  
  const startQuestionnaire = () => {
    window.location.href = '/questionnaire';
  };

  return (
    <nav className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-primary flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
          <Gift className="mr-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">GiftWhisperer</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div onClick={() => scrollToSection('how-it-works')} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer">How It Works</div>
          <div onClick={() => scrollToSection('testimonials')} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer">Testimonials</div>
          <Button onClick={startQuestionnaire} className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Sparkles size={16} />
            Find Perfect Gifts
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <div onClick={() => scrollToSection('how-it-works')} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer py-2">How It Works</div>
            <div onClick={() => scrollToSection('testimonials')} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer py-2">Testimonials</div>
            <Button onClick={startQuestionnaire} className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Sparkles size={16} />
              Find Perfect Gifts
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
