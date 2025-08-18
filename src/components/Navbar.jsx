import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';

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
    <nav aria-label="Primary" className={`sticky top-0 bg-white border-b border-gray-200 text-gray-800 z-50 ${scrolling ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <span className="md:text-2xl text-xl font-extrabold text-blue-900 tracking-tight">CRABTREE</span>
            <span className="hidden md:inline text-sm text-gray-500" aria-label="Tagline">IT & Security Solutions</span>
          </div>

          <button aria-label="Toggle Menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700">Home</a>
            <div className="relative group">
              <a href="#products" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700 flex items-center gap-1">Products</a>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 mt-3 w-[720px] bg-white border border-gray-200 rounded-md shadow-xl p-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Endpoint</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#products">Intercept X Endpoint</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Intercept X for Server</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Mobile (UEM & MTD)</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Device Encryption</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Network</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#products">Next-Gen Firewall</a></li>
                    <li><a className="hover:text-blue-700" href="#products">ZTNA</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Wireless</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Switches</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Cloud & Email</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#products">Cloud Optix (CSPM)</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Cloud Workload Protection</a></li>
                    <li><a className="hover:text-blue-700" href="#products">Email Security</a></li>
                    <li><a className="hover:text-blue-700" href="#products">XDR / EDR</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#services" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700 flex items-center gap-1">Services</a>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 mt-3 w-[720px] bg-white border border-gray-200 rounded-md shadow-xl p-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Managed</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#services">MDR</a></li>
                    <li><a className="hover:text-blue-700" href="#services">Managed Risk / Vulnerability</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Response</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#services">Incident Response</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Enablement</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><a className="hover:text-blue-700" href="#services">Security Awareness / Phish Training</a></li>
                    <li><a className="hover:text-blue-700" href="#services">Professional Services</a></li>
                    <li><a className="hover:text-blue-700" href="#services">Cloud Security / CSPM</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#vapt" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700">VAPT</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700">About</a>
            <a href="#contact-section" className="text-sm font-medium hover:text-blue-700 focus:text-blue-700">Contact</a>

            <div className="relative">
              <input aria-label="Search" type="search" placeholder="Search" className="w-48 lg:w-64 pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <a href="#contact-section" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get a Free Quote</a>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-3 space-y-2`}>
          <a href="#home" className="block px-2 py-2 rounded hover:bg-gray-100">Home</a>
          <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 flex items-center justify-between" onClick={() => setIsServicesOpen(!isServicesOpen)}>
            <span>Services</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {isServicesOpen && (
            <div className="ml-2 border-l border-gray-200">
              {services.map((service, index) => (
                <a key={index} href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700">{service}</a>
              ))}
            </div>
          )}
          <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100">About</a>
          <a href="#contact-section" className="block px-2 py-2 rounded hover:bg-gray-100">Contact</a>
          <a href="#contact-section" className="block mt-2 text-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Get a Free Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
