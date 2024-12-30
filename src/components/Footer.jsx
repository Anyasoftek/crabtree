import React from 'react';
 // Assuming the logo is in the assets folder

const Footer= () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className='font-Manrope'>
          <span className="md:text-2xl text-xl font-bold">CRABTREE</span>
            <p className="mt-4 md:text-[13px] font-futura mb-4">
            At Crabtree Solutions, our core commitment is to understand and address the unique needs of each client. Whether you're a small startup working to establish a solid IT infrastructure or a large enterprise aiming to optimize your existing systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:ml-12 ml-0 font-Manrope">
            <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact-section">Contact Us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className='font-Manrope'>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">Privacy</a></li>
             
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className='font-Manrope'>
            <h3 className="text-xl font-gilory font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-map-marker-alt "></i>
                D 301 Sahastradhara Road, Dehradun Uttarakhand, 248001
              </li>
             
              <li>
                <i className="fas fa-envelope"></i>
                info@crabtreesolutions.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 font-Manrope border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} CrabTree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
