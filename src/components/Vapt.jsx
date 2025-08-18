import React from 'react'

const Vapt = () => {
  return (
    <section id='vapt' className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-left mb-8'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900'>Vulnerability Assessment & Penetration Testing (VAPT)</h2>
          <p className='mt-2 text-gray-600 max-w-3xl'>Alerting today for a safer tomorrow. Identify weaknesses before attackers do and prioritize remediation to reduce risk across applications, networks, and cloud.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>What is VAPT?</h3>
            <p className='mt-2 text-sm text-gray-700'>VAPT combines two complementary approaches: Vulnerability Assessment to discover weaknesses across assets, and Penetration Testing to safely exploit and validate real-world impact. Together they provide a comprehensive view of security posture and actionable remediation guidance.</p>

            <h3 className='mt-6 text-lg font-semibold text-gray-900'>Why do organizations need VAPT?</h3>
            <ul className='mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside'>
              <li>Vulnerabilities exist across all environments: applications, network devices, and cloud infrastructure.</li>
              <li>SMBs are frequently targeted; proactive testing reduces financial and reputational risk.</li>
              <li>Supports compliance initiatives (e.g., GDPR, ISO 27001, PCI DSS) with evidence-based reporting.</li>
            </ul>

            <h3 className='mt-6 text-lg font-semibold text-gray-900'>Typical VAPT process</h3>
            <ol className='mt-2 space-y-2 text-sm text-gray-700 list-decimal list-inside'>
              <li>Information gathering and scoping</li>
              <li>Planning and analysis</li>
              <li>Automated and manual vulnerability discovery</li>
              <li>Penetration testing and validation</li>
              <li>Reporting with risk-based recommendations</li>
              <li>Re-testing and final report</li>
            </ol>
          </div>

          <div className='rounded-lg border border-gray-200 bg-gray-50 p-6'>
            <h3 className='text-lg font-semibold text-gray-900'>Benefits of VAPT</h3>
            <ul className='mt-3 space-y-2 text-sm text-gray-700'>
              <li className='flex gap-2'><span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-green-500'></span>Protect confidential data from unauthorized access and breaches</li>
              <li className='flex gap-2'><span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-green-500'></span>Methodical approach to detect and prioritize critical vulnerabilities</li>
              <li className='flex gap-2'><span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-green-500'></span>Comprehensive analysis across web/mobile apps, networks, and cloud</li>
              <li className='flex gap-2'><span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-green-500'></span>Reduces financial and reputational risk from cyberattacks</li>
              <li className='flex gap-2'><span aria-hidden className='mt-1 h-2 w-2 rounded-full bg-green-500'></span>Assists in achieving and maintaining compliance requirements</li>
            </ul>
            <a href='#contact-section' className='mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700'>Get a Free Consultation</a>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h4 className='text-sm font-semibold text-gray-900'>Application Security Testing</h4>
            <p className='mt-2 text-sm text-gray-700'>Web and mobile application assessments, including business logic testing and secure code review.</p>
          </div>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h4 className='text-sm font-semibold text-gray-900'>Network & Cloud Penetration Testing</h4>
            <p className='mt-2 text-sm text-gray-700'>Internal/external network testing, cloud configuration reviews, and exploitation of misconfigurations.</p>
          </div>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h4 className='text-sm font-semibold text-gray-900'>IoT & Device Security</h4>
            <p className='mt-2 text-sm text-gray-700'>IoT, medical devices, and embedded systems assessments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vapt


