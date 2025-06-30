import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-white py-28 overflow-hidden">
      {/* 👇 Background Image */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-no-repeat bg-contain bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/we_code_vector.png')" }}
      ></div>

      {/* Heading */}
      <motion.h2
        className="custom-text text-5xl text-teal-500 font-bold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
      >
        Our Services
      </motion.h2>

      <div className="custom-text max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* === Programming Card === */}
          <motion.div
            className="bg-teal-500 text-white p-8 rounded-3xl"
            initial="offscreen"
            whileInView="onscreen"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: { y: 100, opacity: 0 },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 1.2,
                  ease: [0.68, -0.55, 0.27, 1.55],
                },
              },
            }}
          >
            <h3 className="text-3xl font-bold text-center mb-4">Programming</h3>
            <ul className="space-y-2 text-lg">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Cyber Security</li>
            </ul>
            <img src="programming.png" alt="Programming" className="mt-8 w-full h-auto drop-shadow-xl" />
          </motion.div>

          {/* === Graphic Design Card === */}
          <motion.div
            className="bg-white border-2 border-gray-200 p-8 rounded-3xl"
            initial="offscreen"
            whileInView="onscreen"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: { y: 100, opacity: 0 },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 1.2,
                  ease: [0.68, -0.55, 0.27, 1.55],
                },
              },
            }}
          >
            <h3 className="text-3xl font-bold text-center text-teal-500 mb-4">Graphic Design</h3>
            <ul className="space-y-2 text-lg text-black">
              <li>Branding</li>
              <li>Social Media</li>
              <li>UI/UX</li>
              <li>Photoshoots (AI)</li>
            </ul>
            <img src="cybersec.png" alt="Design" className="mt-8 w-full h-auto drop-shadow-xl" />
          </motion.div>

          {/* === Marketing Card === */}
          <motion.div
            className="bg-teal-500 text-white p-8 rounded-3xl"
            initial="offscreen"
            whileInView="onscreen"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: { y: 100, opacity: 0 },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 1.2,
                  ease: [0.68, -0.55, 0.27, 1.55],
                },
              },
            }}
          >
            <h3 className="text-3xl font-bold text-center mb-4">Marketing</h3>
            <ul className="space-y-2 text-lg">
              <li>Social Management</li>
              <li>Media Buyer</li>
              <li>Content Marketing</li>
            </ul>
            <img src="marketing.png" alt="Marketing" className="mt-8 w-full h-auto drop-shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
