import React, { useState } from 'react';
import { CiSearch, CiCirclePlus } from 'react-icons/ci';
import profile from '../assets/profile.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full bg-primary text-background  shadow-md '>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='flex items-center space-x-6'>
          <div className='text-3xl font-bold'>Crogger</div>
          <div className='flex items-center space-x-2'>
            <CiSearch className='text-2xl' />
            <input 
              type="text" 
              className='
                bg-transparent 
                border-2 
                border-primary 
                rounded-md 
                px-2 
                py-1 
                placeholder:text-white 
                focus:outline-none 
                focus:border-secondary 
                transition 
                duration-300
                w-24 
                md:w-56
              ' 
              placeholder="Search"
            />
          </div>
        </div>
        <div className='hidden md:flex items-center space-x-6 transition-transform duration-300'>
          <a href="#" className="hover:text-secondary flex items-center space-x-2 transition duration-300">
            <CiCirclePlus className='text-2xl' />
            <span>Write</span>
          </a>
          <a href="#" className="hover:text-secondary transition duration-300">
            Your Blogs
          </a>
          <a href="#" className="hover:border-secondary hover:rounded-full border-2 border-transparent transition duration-300">
            <img 
              src={profile} 
              alt="Profile" 
              className='rounded-full w-12 h-12 border-2 border-black'
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-primary text-white px-4 py-3 space-y-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className=" flex gap-2 items-center hover:text-secondary transition duration-300">
          <img 
              src={profile} 
              alt="Profile" 
              className='rounded-full w-8 h-8 border-2 border-black'
            />
            <span className=' items-center'>Profile</span>
        </a>
        <a href="#" className="flex gap-2 items-center hover:text-secondary transition duration-300">
          <CiCirclePlus className=' w-8 h-8 text-2xl' />
            <span>Write</span>
        </a>
        <a href="#" className="block hover:text-secondary transition duration-300">
          My Blogs
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar;
