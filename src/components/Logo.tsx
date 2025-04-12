
import React from 'react';
import { Leaf } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="h-6 w-6 text-eco-dark" />
      <span className="font-heading font-semibold text-xl">Sustainable Futures</span>
    </div>
  );
};

export default Logo;
