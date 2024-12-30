import React from 'react'
import { ExpandableCardDemo } from './ux/Excard'

const Services = () => {
  return (
    <section id='services' className='flex-col p-8 overflow-hidden'>
        <div className='justify-center ml-24 text-2xl font-bold md:text-4xl lg:text-5xl text-left mb-10'>
       <h2 className='text-white'>OUR <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700'>SERVICES</span></h2>
        </div>
        <ExpandableCardDemo/>
    </section>
       
    
   
   
  )
}

export default Services