import React from 'react'

const Blogitems = () => {
  return (
    <section className='pt-10 pb-20'>
        <div className="container gap-12 justify-center flex">
            <div className='w-full max-w-6xl'>
                <img src="/Blog.png" alt="Blog" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='font-roboto font-medium text-3xl text-third'>Balance is important in design</h2>
              <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Blogitems
