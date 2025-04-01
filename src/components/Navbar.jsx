import React, { useState } from 'react';
import { CiSearch, CiCirclePlus } from 'react-icons/ci';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_main.svg';
import profile from '../assets/profile.jpg';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full text-black bg-white  shadow-md z-10">
      <div className="container mx-auto py-3 flex justify-between items-center px-4">
        
        {/* Logo & Search */}
        <div className="flex items-center space-x-6">
          <div onClick={() => navigate('/')} className="cursor-pointer w-16 h-16">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm">
            <CiSearch className="text-gray-500 text-2xl" />
            <input
              type="text"
              className="bg-transparent outline-none w-24 md:w-56 text-black placeholder-gray-500"
              placeholder="Search blogs..."
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-black font-medium">
          <a href="/" className="hover:text-gray-700 transition duration-300">
            Home
          </a>
          
          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-700 flex items-center">
              Categories ▼
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Tech</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sports</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Lifestyle</a>
            </div>
          </div>

          <div
            onClick={() => navigate('/create')}
            className="flex items-center cursor-pointer hover:text-gray-700 transition duration-300"
          >
            <CiCirclePlus className="text-2xl" />
            <span>Create Blog</span>
          </div>

          <a href="#" className="hover:text-gray-700 transition duration-300">
            Your Blogs
          </a>

          <a href="#" className="hover:border-gray-500 hover:shadow-lg border-2 border-transparent rounded-full transition duration-300">
            <img
              src="https://res.cloudinary.com/ddddij3vr/image/upload/v1737605994/profile_qnewom.jpg"
              alt="Profile"
              className="rounded-full w-12 h-12 shadow-md"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <IoMdClose className="w-7 h-7" /> : <IoMdMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden bg-white text-black px-4 py-3 space-y-2 ${menuOpen ? "block" : "hidden"}`}>
        <a href="#" className="flex gap-2 items-center hover:text-gray-700 transition duration-300">
          <img src={profile} alt="Profile" className="rounded-full w-8 h-8 border-2 border-black" />
          <span>Profile</span>
        </a>
        <a href="#" className="flex gap-2 items-center hover:text-gray-700 transition duration-300">
          <CiCirclePlus className="w-8 h-8 text-2xl" />
          <span>Write</span>
        </a>
        <a href="#" className="block hover:text-gray-700 transition duration-300">
          My Blogs
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
