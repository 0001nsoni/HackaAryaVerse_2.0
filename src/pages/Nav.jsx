import React, { useState } from 'react'
import { FaHome, FaInfoCircle, FaCalendarAlt, FaUsers, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold font-orbitron text-white tracking-wide">
          HackAryaVerse 2.0
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 font-inter text-white text-lg">
          <li className="flex items-center space-x-1 hover:text-indigo-300 cursor-pointer transition">
            <FaHome /> <span>Home</span>
          </li>
          <li className="flex items-center space-x-1 hover:text-indigo-300 cursor-pointer transition">
            <FaInfoCircle /> <span>About</span>
          </li>
          <li className="flex items-center space-x-1 hover:text-indigo-300 cursor-pointer transition">
            <FaCalendarAlt /> <span>Schedule</span>
          </li>
          <li className="flex items-center space-x-1 hover:text-indigo-300 cursor-pointer transition">
            <FaUsers /> <span>Teams</span>
          </li>
          <li className="flex items-center space-x-1 hover:text-indigo-300 cursor-pointer transition">
            <FaPhoneAlt /> <span>Contact</span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-black/60 backdrop-blur-lg text-white font-inter text-lg flex flex-col items-center space-y-4 py-4">
          <li className="flex items-center space-x-1 hover:text-indigo-300"><FaHome /> <span>Home</span></li>
          <li className="flex items-center space-x-1 hover:text-indigo-300"><FaInfoCircle /> <span>About</span></li>
          <li className="flex items-center space-x-1 hover:text-indigo-300"><FaCalendarAlt /> <span>Schedule</span></li>
          <li className="flex items-center space-x-1 hover:text-indigo-300"><FaUsers /> <span>Teams</span></li>
          <li className="flex items-center space-x-1 hover:text-indigo-300"><FaPhoneAlt /> <span>Contact</span></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
