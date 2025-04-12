
import React from 'react';
import Logo from './Logo';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-dark text-white py-12">
      <div className="eco-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-eco-light mb-4">
              Sustainable solutions for a better planet. Reimagining everyday routines through eco-friendly innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-eco-medium transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-eco-medium transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-eco-medium transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-eco-medium transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Mindful Companion</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">EcoFlow Shower Head</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">HydroTrack</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">All Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-eco-light hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-eco-medium/30 mt-12 pt-8 text-center text-eco-light">
          <p>© {new Date().getFullYear()} Sustainable Futures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
