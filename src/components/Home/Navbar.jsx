import React from 'react'
const Navbar = () => {
  return (
    <>
        <nav>
        <div className="container flex m-auto justify-between py-5 items-center">
            <div>
                <img src="/logo.png" alt="logo"/>
            </div>
            <ul className="flex gap-10 text-slate-700 font-medium">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Portfolio Layouts</a></li>
                <li><a href="#">Portfolio Single</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
     </nav>
    </>
  )
}

export default Navbar
