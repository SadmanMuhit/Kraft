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
            <ul className="flex gap-10 text-slate-700 font-medium">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Portfolio Layouts</Link></li>
                <li><Link to="/">Portfolio Single</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
     </nav>
    </>
  )
}

export default Navbar
