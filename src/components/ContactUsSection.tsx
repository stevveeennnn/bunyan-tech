
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ContactUsSectionProps {
  onFormSubmit: () => void;
}

const ContactUsSection = ({ onFormSubmit }: ContactUsSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onFormSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Contact <span className="text-teal-500">Us</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to turn your ideas into reality? Get in touch with us today!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right - Contact Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="w-64 h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                {/* Placeholder for Contact Us illustration */}
                <span className="text-gray-500 text-sm">Contact Us Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
