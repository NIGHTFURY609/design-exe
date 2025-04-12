
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 w-full">
      <div className="eco-container flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-eco-dark hover:text-eco-medium transition-colors">Products</a>
          <a href="#features" className="text-eco-dark hover:text-eco-medium transition-colors">Features</a>
          <a href="#about" className="text-eco-dark hover:text-eco-medium transition-colors">About Us</a>
        </div>
        
        <Button className="bg-eco-dark hover:bg-eco-dark/90">
          Pre-order Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
