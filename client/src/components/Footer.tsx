import { Gift, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white mt-16 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-heading font-bold flex items-center mb-4 cursor-pointer" onClick={() => window.location.href = '/'}>
              <Gift className="mr-2" />
              GiftWhisperer
            </div>
            <p className="text-gray-300 mb-4">Find the perfect gift for every occasion with our AI-powered recommendations.</p>
            <div className="flex space-x-4">
              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                <Linkedin size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><div onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-300 hover:text-white transition cursor-pointer">How It Works</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Gift Ideas</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Occasions</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Gift Guides</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Blog</div></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">FAQs</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Contact Us</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Privacy Policy</div></li>
              <li><div className="text-gray-300 hover:text-white transition cursor-pointer">Terms of Service</div></li>
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
