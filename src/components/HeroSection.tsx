import React from 'react';
import '../../textStyle.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <motion.section
      className="bg-white py-32 lg:py-60"
      id="hero"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with background */}
          <motion.div
            className="relative space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            {/* Background image behind text */}
            <div
              className="absolute inset-0 z-0 opacity-100 bg-no-repeat bg-contain bg-center pointer-events-none"
              style={{
                backgroundImage: 'url("/we_code_vector.png")', // ⬅️ Put your image in the public/ folder
                height: '450px'
              }}
            ></div>

            {/* Actual text content */}
            <div className="relative z-10 space-y-6">
              <div className="relative z-10 text-xl leading-relaxed max-w-lg">
                <img src="we_code.png" alt="" />
              </div>

              <ScrollLink
                to="about-us"
                smooth={true}
                duration={800}
                offset={-60}
              >
                <Button className="mt-10 group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500">
                  <span className="transition-colors duration-300 group-hover:text-teal-500">Next</span>
                  <svg
                    className="w-5 h-5 transition-colors duration-300 group-hover:stroke-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>

              </ScrollLink>
            </div>

            <p 
            className="custom-text relative z-10 text-xl leading-relaxed max-w-lg">
              We empower businesses to grow and succeed through innovative technology solutions
              and a seamless, full-cycle experience—from development and design to marketing and
              security.
            </p>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            <img
              src="we_code_background.png"
              alt="Illustration"
              className="w-full max-w-md mx-auto"
              style={{
                height: '450px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
