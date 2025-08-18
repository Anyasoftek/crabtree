import React from 'react'

const productCategories = [
  {
    title: 'Endpoint Security',
    items: [
      'Intercept X Endpoint',
      'Intercept X for Server',
      'Mobile (UEM & MTD)',
      'Central Device Encryption',
    ],
  },
  {
    title: 'Network Security',
    items: [
      'Next-Gen Firewall',
      'Zero Trust Network Access (ZTNA)',
      'Wireless Access Points',
      'Switches',
    ],
  },
  {
    title: 'Email & Identity',
    items: [
      'Email Security',
      'Phish Threat (Awareness Training)',
      'Identity & Access Controls',
    ],
  },
  {
    title: 'Cloud Security',
    items: [
      'Cloud Optix (CSPM)',
      'Cloud Workload Protection',
    ],
  },
  {
    title: 'Detection & Response',
    items: [
      'Extended Detection & Response (XDR)',
      'Endpoint Detection & Response (EDR)',
    ],
  },
  {
    title: 'Platform & Management',
    items: [
      'Unified Security Management',
    ],
  },
]

const Products = () => {
  return (
    <section id='products' className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-left mb-8'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900'>Products</h2>
          <p className='mt-2 text-gray-600 max-w-3xl'>Explore enterprise-grade protection across endpoint, network, cloud, email, and identity — unified under a single management platform.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {productCategories.map((cat) => (
            <div key={cat.title} className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900'>{cat.title}</h3>
              <ul className='mt-4 space-y-2 text-sm text-gray-700'>
                {cat.items.map(item => (
                  <li key={item} className='flex items-start gap-2'>
                    <span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-blue-600'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact-section" className='mt-6 inline-block text-blue-700 text-sm font-semibold hover:text-blue-900'>Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products


