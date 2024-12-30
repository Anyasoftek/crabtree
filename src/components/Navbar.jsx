import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';  // Import Framer Motion

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const services = [
    'Cloud Services',
    'Infrastructure Management Services',
    'Security Solutions',
    'Professional Services',
    'Intelligent Automation',
    "Field Services"
  ];

  // Detecting scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-black bg-opacity-95 border-b border-white/10 text-white shadow-lg z-50 ${scrolling ? 'bg-opacity-100' : 'bg-opacity-95'}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Hover Animation */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 md:text-2xl text-xl font-bold">CRABTREE</span>
          </motion.div>

          {/* Hamburger Menu Button (visible on mobile) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex font-bold text-lg items-center gap-20">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </motion.a>

            {/* Desktop Services Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                whileHover={{ scale: 1.1 }}
                initial={{ y: -5 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>

              {/* Dropdown animation */}
              {isServicesOpen && (
                <motion.div
                  className="absolute z-10 top-full left-0 mt-2 w-48 bg-black bg-opacity-95 rounded-md shadow-lg py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {services.map((service, index) => (
                    <motion.a
                      key={index}
                      href="#services"
                      className="block px-4 py-2 hover:bg-white hover:text-black transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.a
              href="#contact-section"
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-4 space-y-2 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>

          {/* Mobile Services Dropdown */}
          <div>
            <motion.button
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              whileHover={{ scale: 1.1 }}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </motion.button>

            {isServicesOpen && (
              <motion.div
                className="bg-black text-white py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {services.map((service, index) => (
                  <motion.a
                    key={index}
                    href="#services"
                    className="block px-8 py-2 hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>

          <motion.a
            href="#contact-section"
            className="block px-4 py-2 hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
