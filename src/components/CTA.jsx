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
    <div id='contact-section' className="relative min-h-screen w-full overflow-hidden">
       
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/bg3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to make the video darker */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
     

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col  gap-8 items-center justify-center min-h-screen">
     <div>
     <h2 className='text-white text-3xl md:text-6xl lg:text-6xl font-bold'>Get In Touch</h2>
     </div>
     <div className='flex gap-8 container mx-auto relative flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8'>
         {/* Contact Form */}
         <div className="w-full text-white max-w-md bg-transparent backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-blue-800 bg-slate-900 rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full border border-blue-800 bg-slate-900 rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={4}
                className="w-full border border-blue-800 bg-slate-900  rounded p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 border-blue-900 text-white py-2 rounded hover:bg-white hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Address Information */}
        <div className="w-full max-w-md bg-transparent text-white backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-left mb-4">Our Address</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Main Office</h3>
              <p className="mt-2">
              D 301 Sahastradhara Road<br />
              Dehradun Uttarakhand, 248001
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Contact Info</h3>
              <p className="mt-2">
               
              info@crabtreesolutions.com
              </p>
            </div>
            
          </div>
        </div>
     </div>
      
      </div>
    </div>
  );
};

export default CTA;
