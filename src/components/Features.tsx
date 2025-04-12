
import React from 'react';
import { 
  Droplet, Leaf, Brain, Recycle, 
  BatteryCharging, CloudSun, ShowerHead, CircleCheck 
} from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, title, description 
}) => {
  return (
    <div className="feature-card animate-fade-in-up">
      <div className="flex items-start gap-4">
        <div className="bg-eco-light p-3 rounded-full mt-1">
          {icon}
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2 text-eco-dark">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="eco-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">Why Choose Our Products?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've designed our products with sustainability, efficiency, and your wellbeing in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Droplet className="h-5 w-5 text-eco-dark" />}
            title="Water Conservation"
            description="Each product is designed to minimize water usage without compromising performance."
          />
          
          <FeatureItem 
            icon={<Brain className="h-5 w-5 text-eco-dark" />}
            title="Mindfulness Integration"
            description="Our products encourage mindful habits that improve wellbeing and sustainability."
          />
          
          <FeatureItem 
            icon={<Recycle className="h-5 w-5 text-eco-dark" />}
            title="Eco-Friendly Materials"
            description="Sustainable, recyclable materials that minimize environmental impact."
          />
          
          <FeatureItem 
            icon={<BatteryCharging className="h-5 w-5 text-eco-dark" />}
            title="Energy Efficient"
            description="Low power requirements with long-lasting battery life for electronic components."
          />
          
          <FeatureItem 
            icon={<ShowerHead className="h-5 w-5 text-eco-dark" />}
            title="Enhanced Experience"
            description="We never compromise on comfort and effectiveness while being sustainable."
          />
          
          <FeatureItem 
            icon={<CircleCheck className="h-5 w-5 text-eco-dark" />}
            title="Scientifically Backed"
            description="All products are designed based on research for optimal results."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
