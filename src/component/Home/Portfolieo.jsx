import React from 'react'

const Portfolieo = () => {
  return (
   <>
     <section className="pt-11 pb-24">
        <div className="container m-auto">
            <ul className="flex gap-3.5 justify-center font-normal text-base text-slate-700 mb-9">
                <li>
                    <a href="#">All /</a>
                </li>
                <li>
                    <a href="#">Branding /</a>
                </li>
                <li>
                    <a href="#">Illustration /</a>
                </li>
                <li>
                    <a href="#">Logo</a>
                </li>
            </ul>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
