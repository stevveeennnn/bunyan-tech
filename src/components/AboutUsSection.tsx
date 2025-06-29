
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-teal-500">Who Are We ?</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                We are a full-service tech company that provides integrated digital solutions for 
                startups, small businesses, and growing brands. Our mission is to turn ideas into 
                successful digital products by combining development, design, and marketing 
                under one roof.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Row 1 */}
              <div className="bg-teal-500 text-white p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Ahmed Aly photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ahmed Aly</h3>
                  <p className="text-sm opacity-90">Founder & CEO</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Sleem Aly photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-teal-500">Sleem Aly</h3>
                  <p className="text-sm text-gray-600">Co- Founder<br />Graphic Designer</p>
                </div>
              </div>
              
              <div className="bg-teal-500 text-white p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Rayyan Nabil photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg">Rayyan Nabil</h3>
                  <p className="text-sm opacity-90">Full-Stack & Flutter</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white border-2 border-gray-200 p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Steven Gerges photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-teal-500">Steven Gerges</h3>
                  <p className="text-sm text-gray-600">Flutter Developer</p>
                </div>
              </div>
              
              <div className="bg-teal-500 text-white p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Yossef Eid photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg">Yossef Eid</h3>
                  <p className="text-sm opacity-90">Cyber security</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-4 rounded-2xl flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                  {/* Placeholder for Lucas Monier photo */}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-teal-500">Lucas Monier</h3>
                  <p className="text-sm text-gray-600">Back-end developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="w-80 h-60 bg-gray-300 rounded-lg flex items-center justify-center">
                {/* Placeholder for About Us illustration */}
                <span className="text-gray-500 text-sm">About Us Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
