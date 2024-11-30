import React from 'react'
const Portfolieo = () => {
  return (
   <>
     <section className="pt-11 pb-24">
        <div className="container m-auto">
            <ul className="flex gap-3.5 justify-center text-base font-normal text-slate-700 mb-9">
                <li>
                    <a href="#" className='hover:text-secendary duration-300'>All /</a>
                </li>
                <li>
                    <a href="#" className='hover:text-secendary duration-300'>Branding /</a>
                </li>
                <li>
                    <a href="#" className='hover:text-secendary duration-300'>Illustration /</a>
                </li>
                <li>
                    <a href="#" className='hover:text-secendary duration-300'>Logo</a>
                </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>        
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
                <img src="/Container.png" alt="" className="w-full"/>
            </div>
        </div>
    </section> 
   </>
  )
}
export default Portfolieo
