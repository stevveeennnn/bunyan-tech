
import React from 'react';

interface ApprovedSectionProps {
  onGoHome: () => void;
}

const ApprovedSection = ({ onGoHome }: ApprovedSectionProps) => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Approved Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="w-80 h-60 bg-gray-300 rounded-lg flex items-center justify-center">
                {/* Placeholder for Approved illustration */}
                <span className="text-gray-500 text-sm">Approved Request Illustration</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-teal-500">Approved</span>
                <br />
                <span className="text-gray-900">Request</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Thank you for reaching out! Your request has been successfully submitted and approved. 
                Our team will get back to you within 24 hours to discuss your project in detail.
              </p>
            </div>

            <button
              onClick={onGoHome}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium text-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <span>GO Home</span>
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprovedSection;
