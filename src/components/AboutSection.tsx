
import React from 'react';
import { Leaf } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="eco-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600" 
              alt="Nature landscape" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-8 w-8 text-eco-dark" />
              <h2 className="text-3xl md:text-4xl font-bold text-eco-dark">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              At Sustainable Futures, we believe that small changes in everyday habits can make a significant impact on our planet. Our mission is to transform routine activities into opportunities for conservation.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Through innovative design and mindful engineering, we create products that not only reduce water consumption and waste but also enhance your daily experiences and wellbeing.
            </p>
            
            <div className="pl-4 border-l-4 border-eco-medium">
              <p className="text-eco-dark font-heading italic">
                "We're committed to creating a future where sustainability isn't just an option—it's built into everything we do."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
