import { Link } from 'wouter';
import { Gift, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white mt-16 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-heading font-bold flex items-center mb-4">
                <Gift className="mr-2" />
                GiftWhisperer
              </a>
            </Link>
            <p className="text-gray-300 mb-4">Find the perfect gift for every occasion with our AI-powered recommendations.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Gift Ideas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Occasions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Gift Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Get gift inspiration and special offers delivered to your inbox.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none focus:ring-0"
              />
              <Button className="rounded-l-none" type="submit">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GiftWhisperer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
