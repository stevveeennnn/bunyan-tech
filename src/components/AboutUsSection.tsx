import React from 'react';
import { motion } from 'framer-motion';
import '../../textStyle.css';

const teamMembers = [
  {
    name: 'Ahmed Aly',
    role: 'Founder & CEO',
    bg: 'bg-teal-500 text-white',
  },
  {
    name: 'Sleem Aly',
    role: 'Co-Founder & Graphic Designer',
    bg: 'bg-white border-2 border-gray-200 text-teal-500',
  },
  {
    name: 'Rayyan Nabil',
    role: 'Full-Stack & Flutter',
    bg: 'bg-teal-500 text-white',
  },
  {
    name: 'Steven Gerges',
    role: 'Flutter Developer',
    bg: 'bg-white border-2 border-gray-200 text-teal-500',
  },
  {
    name: 'Yossef Eid',
    role: 'Cyber Security',
    bg: 'bg-teal-500 text-white',
  },
  {
    name: 'Lucas Monier',
    role: 'Back-end Developer',
    bg: 'bg-white border-2 border-gray-200 text-teal-500',
  },
];

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Text and Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text with Big Background Image */}
          <div className="relative space-y-8">
            {/* Big Background image behind the text */}
            <div
              className="absolute -top-10 -left-10 w-[600px] h-[400px] bg-no-repeat bg-contain bg-center pointer-events-none z-0"
              style={{ backgroundImage: 'url("/we_code_vector.png")' }}
            ></div>

            {/* Actual content above background */}
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-teal-500 custom-text">Who Are We ?</span>
              </h2>
              <p className="custom-text font-bold text-gray-700 text-xl leading-relaxed">
                We are a full-service tech company that provides integrated digital solutions for
                startups, small businesses, and growing brands. Our mission is to turn ideas into
                successful digital products by combining development, design, and marketing under one roof.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img src="about_us.png" alt="About us" />
          </div>
        </div>

        {/* Team Cards */}
        <div className="custom-text mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.1)',
                transition: {
                  duration: 0.2,
                  ease: [0.68, -0.55, 0.27, 1.55],
                },
              }}
              className={`p-4 rounded-2xl flex items-center space-x-4 transition-all duration-300 ease-in-out ${member.bg}`}
            >
              <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className={`text-sm ${member.bg.includes('bg-white') ? 'text-black' : 'opacity-90'}`}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
