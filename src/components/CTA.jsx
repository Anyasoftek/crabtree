import { useState } from 'react';


const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='contact-section' className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className='text-center'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900'>Get in touch</h2>
          <p className='mt-2 text-gray-600 max-w-2xl mx-auto'>Tell us about your goals. We’ll reach out within one business day.</p>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required rows={4} className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
            </form>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
            <div className="mt-4 text-sm text-gray-700">
              <p>D 301 Sahastradhara Road</p>
              <p>Dehradun, Uttarakhand 248001</p>
              <p className="mt-4">Email: <a className="text-blue-700 font-semibold" href="mailto:info@crabtreesolutions.com">info@crabtreesolutions.com</a></p>
              <p>Phone: <a className="text-blue-700 font-semibold" href="tel:+11234567890">(123) 456-7890</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
