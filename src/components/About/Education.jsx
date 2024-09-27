import React from 'react'
import Eduitems from './Eduitems'

const Education = () => {
  return (
    <section className='pb-24'>
      <div className="container">
        <h2 className='font-roboto text-thired text-4xl'>Education / Experiences</h2>
      </div>
      <div className='grid grid-cols-2 gap-8 mt-9'>
      <Eduitems date="2015-2016" border="border-b">I am a graduate of the design at the Newyork University.</Eduitems>
      <Eduitems date="2015-2016" border="border-b">I am a graduate of the design at the Newyork University.</Eduitems>
      <Eduitems date="2015-2016">I am a graduate of the design at the Newyork University.</Eduitems>
      <Eduitems date="2015-2016">I am a graduate of the design at the Newyork University.</Eduitems>
      </div>
    </section>
  )
}

export default Education
