
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-teal-500 italic">WE</span>
                <span className="text-black"> Code</span>
                <br />
                <span className="text-black">Solutions.</span>
                <br />
                <span className="text-black">Market Success.</span>
              </h1>
              
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium text-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:scale-105">
                <span>Next</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              We empower businesses to grow and succeed through innovative technology solutions and a seamless, full-cycle experience—from development and design to marketing and security.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              {/* Isometric Illustration Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main illustration content will be positioned here */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full"></div>
                
                {/* Floating elements to simulate the isometric design */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-teal-400 rounded-lg transform rotate-12 opacity-80"></div>
                <div className="absolute bottom-24 left-16 w-12 h-12 bg-emerald-400 rounded-full opacity-70"></div>
                <div className="absolute top-32 left-20 w-8 h-8 bg-teal-300 rounded transform rotate-45"></div>
                
                {/* Central tech elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Monitor representation */}
                    <div className="w-32 h-20 bg-gray-800 rounded-lg relative mb-4">
                      <div className="w-28 h-16 bg-teal-400 rounded m-2 flex items-center justify-center">
                        <div className="text-white text-xs font-mono">&lt;/&gt;</div>
                      </div>
                    </div>
                    
                    {/* People figures */}
                    <div className="absolute -right-16 -top-4 w-12 h-16 bg-orange-300 rounded-full"></div>
                    <div className="absolute -left-12 -top-2 w-10 h-14 bg-blue-300 rounded-full"></div>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="absolute bottom-16 right-12 bg-teal-500 text-white px-3 py-1 rounded text-sm font-medium">
                  HTML
                </div>
                <div className="absolute top-16 right-8 bg-emerald-500 text-white px-3 py-1 rounded text-sm font-medium">
                  JAVA
                </div>
                <div className="absolute bottom-20 left-8 bg-teal-600 text-white px-2 py-1 rounded text-xs">
                  &lt;/&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
