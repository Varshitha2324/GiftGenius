import { useState } from 'react';
import { Link } from 'wouter';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-heading font-bold text-primary flex items-center">
            <Gift className="mr-2" />
            GiftWhisperer
          </a>
        </Link>
        <div className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="font-medium text-neutral-dark hover:text-primary transition">How It Works</a>
          <a href="#testimonials" className="font-medium text-neutral-dark hover:text-primary transition">Testimonials</a>
          <a href="#" className="font-medium text-neutral-dark hover:text-primary transition">Blog</a>
        </div>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
