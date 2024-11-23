import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Camera } from 'lucide-react';
import logo from '../assets/fslogo2.png'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full pb-0 bg-black py-10 pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo and Tagline */}
          <div className="w-44 cursor-pointer">
            <img src={logo} alt="logo" />
            {/* <h1 className='text-yellow-400 font-extrabold bg-transparent text-2xl'>Lemon Studio</h1> */}

          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {currentYear} All rights reserved
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
      <div>
        <a href="https://github.com/talaganaRajesh" target='blank'><h1 className='text-white transition-opacity duration-300 hover:opacity-100 cursor-pointer opacity-50 text-center pb-5'>Made bith 💗 By Rajesh</h1></a>
      </div>
    </footer>
  );
};

export default Footer;