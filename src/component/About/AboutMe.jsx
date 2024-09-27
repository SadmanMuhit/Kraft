import React from 'react'
import Aboutitems from './Aboutitems'
import { FaBox } from "react-icons/fa6";
const AboutMe = () => {
  return (
    <>
      <section className='py-24'>
        <div className="container">
            <h2 className='font-roboto text-thired text-4xl font-medium'>About Me</h2>
            <p className='text-thired text-2x1 font-roboto font-normal mt-6'>I’m a Product designer currently working as freelancer. I’m from Iceland but my work is essentially in Sydney. Specialized in graphic,
              webdesign and interface design. I’ve been working as a designer for six years. I’ve Completed my education from most popular universities.
              Learning is the essential part of my life. I take on freelance projects that pique my interest. Outside of my work, I enjoy good food and the
              outdoors games with friends and relatives. I also spend my spare time in libraries.</p>
        <div className='grid grid-cols-4 gap-7 mt-12'>
          <Aboutitems title="Branding" icon={<FaBox className='text-4xl'/>}/>
          <Aboutitems title="Branding" icon={<FaBox className='text-4xl'/>}/>
          <Aboutitems title="Branding" icon={<FaBox className='text-4xl'/>}/>
          <Aboutitems title="Branding" icon={<FaBox className='text-4xl'/>}/>
        </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
