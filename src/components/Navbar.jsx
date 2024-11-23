import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/fslogo2.png'
import { RainbowButton } from "@/components/ui/rainbow-button"
import "./Navbar.css"
import ShimmerButton from "@/components/ui/shimmer-button";


function Navbar() {
  return (
    <>
      <nav className="p-4 px-10 flex items-center justify-between bg-black">
        <div className="flex items-center">
          <Link to="/">
                <img src={logo} alt="Logo" className="h-10 mr-4 cursor-pointer" />
          </Link>
          {/* <h1 className='text-yellow-400 font-extrabold bg-transparent text-2xl'>Lemon Studio</h1> */}
        </div>
        <div className="flex space-x-14">
          {/* <ShimmerButton className="p-0 m-0" >
          <NavLink to="/">Home</NavLink>
        </ShimmerButton> */}

          <Link
            to="/"
            className="p-0 m-0"
          >
            <ShimmerButton className="text-white bg-zinc-900 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300 relative group overflow-hidden py-2 px-8 bg-opacity-60" >
              Home
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shine" />
            </ShimmerButton>
          </Link>

          <Link
            to="/about"
            className="p-0 m-0"
          >
            <ShimmerButton className="text-white bg-zinc-900 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300 relative group overflow-hidden py-2 px-8 bg-opacity-60" >
              About
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shine" />
            </ShimmerButton>
          </Link>

          <Link
            to="/services"
            className="p-0 m-0"
          >
            <ShimmerButton className="text-white bg-zinc-900 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300 relative group overflow-hidden py-2 px-8 bg-opacity-60" >
              Services
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shine" />
            </ShimmerButton>
          </Link>

          <Link
            to="/contact"
            className="p-0 m-0"
          >
            <ShimmerButton className="text-white bg-zinc-900 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300 relative group overflow-hidden py-2 px-8 bg-opacity-60" >
              Contact
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shine" />
            </ShimmerButton>
          </Link>



        </div>
        <div className="text-white">
          <RainbowButton>Get Started</RainbowButton>
        </div>
      </nav>
      <div className='border border-gray-800 opacity-80'></div>
    </>
  )
}



export default Navbar