"use client";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">Trusted IT & Cybersecurity Services for Modern Businesses</h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">We help organizations plan, implement, and scale secure, reliable infrastructure. Reduce risk, accelerate delivery, and keep your teams focused on growth.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact-section" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get a Free Quote</a>
            <a href="#services" className="inline-flex items-center rounded-md border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">Explore Services</a>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-green-500"></span> Managed IT & Cloud</li>
            <li className="flex items-start gap-2"><span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-green-500"></span> Security Assessments</li>
            <li className="flex items-start gap-2"><span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-green-500"></span> Compliance & Governance</li>
            <li className="flex items-start gap-2"><span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-green-500"></span> 24/7 Support</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-200">
          <img src="/services.jpg" alt="Professional IT services" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

