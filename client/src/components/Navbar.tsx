import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-primary flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
          <Gift className="mr-2" />
          GiftWhisperer
        </div>
        <div className="hidden md:flex space-x-6">
          <div onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer">How It Works</div>
          <div onClick={() => document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})} className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer">Testimonials</div>
          <div className="font-medium text-neutral-dark hover:text-primary transition cursor-pointer">Blog</div>
        </div>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
