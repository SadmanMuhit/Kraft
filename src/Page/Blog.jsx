import React from 'react'
import Navbar from '../component/home/Navbar'
import Blogitems from '../component/Blog/Blogitems'
import Banner from '../component/Blog/Banner'
import Footer from '../component/home/Footer'
const Blog = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Blogitems/>
      <Footer/>
    </>
  )
}

export default Blog