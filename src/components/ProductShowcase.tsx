
import React from 'react';
import { Brain, Droplet, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}> = ({ title, description, icon, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-eco-light p-2 rounded-full">{icon}</div>
          <h3 className="font-heading font-semibold text-xl">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full bg-eco-dark hover:bg-eco-dark/90">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-eco-lightest">
      <div className="eco-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">Our Innovative Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reimagining bathroom routines with sustainable solutions that save water and improve wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="Mindful Companion" 
            icon={<Brain className="h-6 w-6 text-eco-dark" />}
            description="A calming companion that helps reduce bathroom visits through mindfulness and association techniques."
            imageSrc="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600"
          />
          
          <ProductCard 
            title="EcoFlow Shower Head" 
            icon={<Droplet className="h-6 w-6 text-eco-dark" />}
            description="Optimizes water flow to reduce consumption while maintaining an enjoyable shower experience."
            imageSrc="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600"
          />
          
          <ProductCard 
            title="HydroTrack" 
            icon={<Activity className="h-6 w-6 text-eco-dark" />}
            description="Smart tracker that recommends optimal bathroom times to reduce water usage and improve health."
            imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
