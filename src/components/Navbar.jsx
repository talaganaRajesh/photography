import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import logo from '@/assets/fslogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ to, children }) => (
    <Link to={to} className="w-full md:w-auto">
      <ShimmerButton 
        className="w-full text-white bg-zinc-900 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300 relative group overflow-hidden py-2 px-8 bg-opacity-60"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shine" />
      </ShimmerButton>
    </Link>
  );

  return (
    <>
      <nav className="p-4 px-4 md:px-10 bg-black">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 md:h-10 mr-4 cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-14">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:block">
            <RainbowButton>Get Started</RainbowButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col space-y-4 mt-4`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="pt-2">
            <RainbowButton className="w-full">Get Started</RainbowButton>
          </div>
        </div>
      </nav>
      <div className="border border-gray-800 opacity-80" />
    </>
  );
};

export default Navbar;