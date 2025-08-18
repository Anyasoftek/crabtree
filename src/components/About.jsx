import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900">About Crabtree</h2>
          <p className="mt-4 text-gray-600 leading-7">We partner with organizations to design, implement, and manage secure IT environments. Our team blends deep expertise with a pragmatic approach to deliver measurable outcomes.</p>
          <ul className="mt-6 space-y-2 text-gray-700 text-sm">
            <li>• 10+ years delivering enterprise and SMB solutions</li>
            <li>• Certified across leading vendors and cloud platforms</li>
            <li>• Clear engagement model with documented handover</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Testimonials</h3>
          <div className="mt-4 grid gap-4">
            <blockquote className="rounded-md bg-white p-4 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-700">“Professional, responsive, and security-focused. They modernized our network with zero downtime.”</p>
              <footer className="mt-2 text-xs text-gray-500">CTO, Manufacturing</footer>
            </blockquote>
            <blockquote className="rounded-md bg-white p-4 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-700">“Their managed services gave us predictable costs and faster response times.”</p>
              <footer className="mt-2 text-xs text-gray-500">COO, Healthcare</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
