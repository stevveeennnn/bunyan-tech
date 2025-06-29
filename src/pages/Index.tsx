
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactUsSection from '@/components/ContactUsSection';
import ApprovedSection from '@/components/ApprovedSection';

const Index = () => {
  const [showApproved, setShowApproved] = useState(false);

  const handleFormSubmit = () => {
    setShowApproved(true);
  };

  const handleGoHome = () => {
    setShowApproved(false);
  };

  if (showApproved) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ApprovedSection onGoHome={handleGoHome} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactUsSection onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Index;
