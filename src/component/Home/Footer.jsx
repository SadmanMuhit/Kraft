import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
const Footer = () => {
  return (
    <>
    <footer className="pb-9 pt-24 bg-black">
        <div className="container m-auto">
            <ul className="flex gap-10 justify-center font-medium text-white py-9">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Portfolio Layouts</a></li>
                <li><a href="#">Portfolio Single</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul className="text-black flex justify-center gap-4 mb-12">
                <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center"><a href="#"><FaFacebookF/></a></li>
                <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center"><a href="#"><FaTwitter/></a></li>
                <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center"><a href="#"><FaBasketballBall/></a></li>
                <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center"><a href="#"><SlSocialPintarest/></a></li>
            </ul>
        </div>
        <p className="text-white text-center border-t pt-9 border-gray-500">© 2020 CaliberThemes</p>
    </footer>
    </>
  )
}
export default Footer
