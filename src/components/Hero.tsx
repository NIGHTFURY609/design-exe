
import React from 'react';
import { ArrowRight, Droplet, Leaf, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-24 gradient-bg">
      <div className="eco-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-dark mb-6">
              Sustainable Solutions for Everyday Life
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              At Sustainable Futures, we're reimagining bathroom routines with eco-friendly products that save water, reduce waste, and improve your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button flex items-center gap-2">
                Pre-order Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-eco-dark text-eco-dark hover:bg-eco-light">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-eco-light rounded-full p-4">
                <Droplet className="h-8 w-8 text-eco-dark" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-eco-light rounded-full p-4">
                <Brain className="h-8 w-8 text-eco-dark" />
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80&w=600" 
                  alt="Sustainable bathroom products" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
