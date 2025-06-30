// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-scroll';

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-100 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <img src="logo.png" alt="Logo" className="h-10 w-auto" />

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link
//               to="hero"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               activeClass="text-teal-600 font-semibold"
//               className="cursor-pointer text-gray-900 font-medium transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="about-us"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               activeClass="text-teal-600 font-semibold"
//               className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium transition-colors"
//             >
//               About Us
//             </Link>
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               activeClass="text-teal-600 font-semibold"
//               className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium transition-colors"
//             >
//               Services
//             </Link>
//           </nav>

//           {/* Contact Button */}
//           <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg">
//             <Link
//               to="contact-us"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="cursor-pointer"
//             >
//               Contact Us
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src="logo.png" alt="Logo" className="h-10 w-auto" />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer text-gray-500 hover:text-gray-900 border-b-2 border-transparent pb-1 transition-all duration-200"
            >
              Home
            </Link>

            <Link
              to="about-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer text-gray-500 hover:text-gray-900 border-b-2 border-transparent pb-1 transition-all duration-200"
            >
              About Us
            </Link>

            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer text-gray-500 hover:text-gray-900 border-b-2 border-transparent pb-1 transition-all duration-200"
            >
              Services
            </Link>
          </nav>

          {/* Contact Button */}
          <Button className="group bg-teal-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2">
            <Link
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer transition-colors duration-300"
            >
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
