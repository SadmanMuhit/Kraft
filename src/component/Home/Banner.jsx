import React from 'react'

const Banner = () => {
  return (
    <>
    <section className="py-80 sm:py-35 lg:py-80 bg-[url('/Background.png')] bg-cover bg-center">
        <div className="container m-auto">
            <h1 className="font-medium text-6xl text-center text-slate-700">Creative Studio</h1>
            <p className="font-normal text-slate-700 text-center mt-3.5">We turn ideas into reality.</p>
        </div>
    </section>
    </>
  )
}

export default Banner
