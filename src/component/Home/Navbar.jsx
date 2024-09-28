import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav>
        <div className="container flex m-auto justify-between py-5 items-center">
            <div>
                <img src="/logo.png" alt="logo"/>
            </div>
            <ul className="flex gap-10 text-third font-medium">
                <li><Link to="/" className='hover:text-secendary duration-300'>Home</Link></li>
                <li><Link to="/about" className='hover:text-secendary duration-300'>About</Link></li>
                <li><Link to="/" className='hover:text-secendary duration-300'>Portfolio Layouts</Link></li>
                <li><Link to="/" className='hover:text-secendary duration-300'>Portfolio Single</Link></li>
                <li><Link to="/blog" className='hover:text-secendary duration-300'>Blog</Link></li> 
            </ul>
        </div>
     </nav>
    </>
  )
}

export default Navbar
