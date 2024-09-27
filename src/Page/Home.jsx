import React from 'react'
import Navbar from '../components/home/Navbar'
import Banner from '../components/home/Banner'
import Portfolieo from '../components/home/Portfolieo'
import Footer from '../components/home/Footer'

const home = () => {
  return (
  <>
    <Navbar />
    <Banner />
    <Portfolieo />
    <Footer/>
  </>
  )
}

export default home
