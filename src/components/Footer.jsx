import React from 'react';

const Footer= () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="md:text-2xl text-xl font-extrabold text-blue-900">CRABTREE</span>
            <p className="mt-4 text-sm leading-6">We provide scalable, secure IT solutions that help businesses reduce risk and accelerate growth.</p>
            <p className="mt-2 text-sm">Call: <a href="tel:+11234567890" className="font-semibold text-blue-700 hover:text-blue-900">(123) 456-7890</a></p>
            <p className="text-sm">Email: <a href="mailto:info@crabtreesolutions.com" className="font-semibold text-blue-700 hover:text-blue-900">info@crabtreesolutions.com</a></p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-blue-700" href="#home">Home</a></li>
              <li><a className="hover:text-blue-700" href="#services">Services</a></li>
              <li><a className="hover:text-blue-700" href="#about">About</a></li>
              <li><a className="hover:text-blue-700" href="#contact-section">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-blue-700" href="/terms">Terms & Conditions</a></li>
              <li><a className="hover:text-blue-700" href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get in Touch</h3>
            <address className="not-italic mt-4 text-sm">
              D 301 Sahastradhara Road<br />
              Dehradun, Uttarakhand 248001
            </address>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CrabTree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
