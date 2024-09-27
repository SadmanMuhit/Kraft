import React from 'react'

const Banner = () => {
  return (
        <section className='pt-16 bg-primary'>
            <div className='container flex items-center'>
                <div className='w-3/5'>
                <h1 className='text-thired text-roboto text-6xl font-medium mb-2'>Mike Reaves</h1>
                <p className='text-secendary text-roboto text-2xl font-normal'>Product designer</p>
                </div>
                <div className="w-2/5">
                    <img src="/About-banner.png" alt="about-banner"/>
                </div>
            </div>
        </section>
  )
}

export default Banner
