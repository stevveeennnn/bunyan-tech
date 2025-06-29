
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background decorative blob */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-50 -z-10"></div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Programming Card */}
            <div className="bg-teal-500 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Programming</h3>
                <div className="space-y-3 text-lg">
                  <p>Web Development</p>
                  <p>App Development</p>
                  <p>Cyber Security</p>
                </div>
                
                {/* Illustration placeholder */}
                <div className="mt-8 h-40 bg-teal-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-teal-200 text-sm">Programming Illustration</span>
                </div>
              </div>
            </div>

            {/* Graphic Design Card */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-teal-500">Graphic Design</h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p>Branding</p>
                  <p>Social Media</p>
                  <p>UI/UX</p>
                  <p>Photoshoots (AI)</p>
                </div>
                
                {/* Illustration placeholder */}
                <div className="mt-8 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Design Illustration</span>
                </div>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="bg-teal-500 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Marketing</h3>
                <div className="space-y-3 text-lg">
                  <p>Social Management</p>
                  <p>Media Buyer</p>
                  <p>Content Marketing</p>
                </div>
                
                {/* Illustration placeholder */}
                <div className="mt-8 h-40 bg-teal-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-teal-200 text-sm">Marketing Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
