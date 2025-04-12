
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Features from '@/components/Features';
import SignupForm from '@/components/SignupForm';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <AboutSection />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
