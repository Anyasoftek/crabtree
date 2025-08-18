import React from "react";

export function StickyScrollRevealDemo() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className='text-center'>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900">Why Choose Us</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Enterprise-grade delivery, SMB-friendly approach. We combine proven methodologies with a pragmatic engagement model.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Certified Experts</h3>
            <p className="mt-2 text-sm text-gray-700">Multi-vendor credentials across cloud, security, and networking.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Proven Methodology</h3>
            <p className="mt-2 text-sm text-gray-700">Clear requirements, milestones, documentation, and handover.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Security First</h3>
            <p className="mt-2 text-sm text-gray-700">Best practices aligned to compliance frameworks and zero-trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
