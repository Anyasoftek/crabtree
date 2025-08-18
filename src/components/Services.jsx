import React from 'react'

const services = [
  {
    title: 'Managed Detection & Response (MDR)',
    points: [
      '24/7 threat hunting and response',
      'Expert-led triage and remediation',
      'Coverage across endpoint, network, cloud, and email',
    ],
  },
  {
    title: 'Incident Response',
    points: [
      'Rapid containment and recovery',
      'Forensics and root-cause analysis',
      'Guided remediation and reporting',
    ],
  },
  {
    title: 'Managed Risk / Vulnerability Management',
    points: [
      'Identify critical vulnerabilities',
      'Attack surface reduction',
      'Continuous monitoring and prioritization',
    ],
  },
  {
    title: 'Cloud Security & CSPM',
    points: [
      'Posture management and compliance',
      'Misconfiguration and risk detection',
      'Governance best practices',
    ],
  },
  {
    title: 'Security Awareness & Phishing Simulation',
    points: [
      'Phishing campaigns and training',
      'User risk scoring',
      'Progress tracking and reporting',
    ],
  },
  {
    title: 'Professional Services',
    points: [
      'Solution design and deployment',
      'Migrations and modernization',
      'Documentation and handover',
    ],
  },
]

const Services = () => {
  return (
    <section id='services' className='bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-left mb-8'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900'>Our Services</h2>
          <p className='mt-2 text-gray-600 text-base md:text-lg max-w-3xl'>Align your security program with MDR, Incident Response, CSPM, and awareness training—delivered by certified experts.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((s) => (
            <div key={s.title} className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900'>{s.title}</h3>
              <ul className='mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside'>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="#contact-section" className='mt-6 inline-block text-blue-700 text-sm font-semibold hover:text-blue-900'>Request assessment →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services