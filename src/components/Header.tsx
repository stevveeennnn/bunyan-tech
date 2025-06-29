
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">UNYAN TECH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium relative hover:text-teal-600 transition-colors">
              Home
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></div>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Services
            </a>
          </nav>

          {/* Contact Button */}
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
