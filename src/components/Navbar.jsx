 // React aur zaroori libraries import kar rahe hain
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";

// Navbar component start
export default function Navbar() {

  // --- State management ---
  const [openDropdown, setOpenDropdown] = useState(null); // Track karta hai kaunsa dropdown open hai
  const [menuOpen, setMenuOpen] = useState(false);        // Mobile menu ke liye toggle state
  const navigate = useNavigate();                          // Programmatic navigation ke liye

  // Dropdown open/close toggle function
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

     const handleOnClick = () => {
    navigate("/Login");
    setMenuOpen(false);
    setOpenDropdown(null);
  };


  const handleSignupClick = () => {
    navigate("/Signup");
  }
  // --- Click outside dropdown close karne ke liye useEffect ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // --- JSX rendering start ---
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-15  px-0.1 font-medium text-xl bg-[#1a1a1a] text-[#f5f5f5]">

        {/* Logo Section */}
        <div className='text-base sm:text-lg md:text-3xl font-bold' style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
          Khan Construction
        </div> 

        {/* Hamburger Icon for Mobile Menu */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden md:hidden  text-2xl p-2">
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* --- Mobile Menu --- */}
        {menuOpen && (
          <div className='sm:hidden absolute top-14 left-0 w-full bg-white z-50 flex flex-col px-5 py-4 space-y-3 text-base font-medium text-gray-800 rounded-b-lg transition-all duration-300 ease-in-out'>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 cursor-pointer">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 cursor-pointer">About Us</Link>

            {/* Services dropdown (Mobile) */}
            <div className='dropdown dropdown-mobile'>
              <button onClick={() => toggleDropdown("services")} className='flex justify-between items-center w-full hover:text-blue-600 cursor-pointer'>
                <span>Services</span>
                <FaChevronDown className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "services" && (
                <div className='pl-4 mt-2 space-y-1 text-sm text-gray-700 hover:bg-blue-500 flex flex-col z-50'>
                  <Link to="/services/construction" onClick={() => setMenuOpen(false)}
                   >Construction</Link>
                  <Link to="/services/elevation" onClick={() => setMenuOpen(false)}>Elevation Design</Link>
                  <Link to="/services/floor" onClick={() => setMenuOpen(false)}>Floor Plan</Link>
                  <Link to="/services/interior" onClick={() => setMenuOpen(false)}>Interior Design</Link>
                </div>
              )}
            </div>

            {/* Project dropdown (Mobile)*/}
             <div className='dropdown dropdown-mobile'>
              <button onClick={() => toggleDropdown("projects")} className='flex justify-between items-center w-full text-black cursor-pointer'><span>Projects</span>
                <FaChevronDown className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              {openDropdown === "projects" && (
                <div className='pl-4 mt-2 space-y-1 text-sm text-gray-700 flex flex-col z-50'>
                  <Link to="/projects/construction" onClick={() => setMenuOpen(false)}>Construction Projects</Link>
                  <Link to="/projects/elvation" onClick={() => setMenuOpen(false)}>Elevation Design Projects</Link>
                  <Link to="/projects/floor" onClick={() => setMenuOpen(false)}>Floor plan Projects</Link>
                  <Link to="/projects/interior" onClick={() => setMenuOpen(false)}>Interior Design Projects</Link>
                </div>
              )}
             </div>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 cursor-pointer">Contact Us</Link>


            {/* Divider */}
            <div className='border-t border-gray-300 my-2'></div>

            {/* Login and Signup Buttons (Mobile) */}
            <button className="w-full border-black px-3 py-2 rounded text-sm text-left hover:bg-gray-100 transition" onClick={handleOnClick}>Login</button>            
            <button onClick={handleSignupClick} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer" >Sign up</button>
          </div>
        )}

        {/* --- Desktop Menu --- */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/" className='cursor-pointer'>Home</Link>
          <Link to="/about">About Us</Link>

          {/* Services dropdown (Desktop) */}
          <div className="relative dropdown">
            <button onClick={(e) => { e.preventDefault(); toggleDropdown("services"); }}
              className="flex items-center gap-1 text-white font-light-100 hover:text-blue-600 transition-colors duration-200">
              <span>Services</span>
              <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-8 left-0 bg-black shadow-lg border rounded-md w-30 z-50 text-xs">
                {[
                  { path: "services/construction", label: "Construction" },
                  { path: "services/elevation", label: "Elevation Design" },
                  { path: "services/floor", label: "Floor Plan" },
                  { path: "services/interior", label: "Interior Design" }
                ].map(item => (
                  <Link key={item.path} to={item.path} onClick={() => setOpenDropdown(null)} className="block px-2 py-1 hover:text-black hover:bg-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Projects dropdown (Desktop) */}
          <div className="relative dropdown">
            <button onClick={(e) => { e.preventDefault(); toggleDropdown("projects"); }}
              className="flex items-center gap-1 text-white font-light-100 hover:text-blue-600 transition-colors duration-200">
              <span>Projects</span>
              <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {openDropdown === "projects" && (
              <div className="absolute top-8 left-0 bg-black shadow-lg border rounded-md w-30 z-50 text-xs">
                {[
                  { path: "projects/construction", label: "Construction Projects" },
                  { path: "projects/elevation", label: "Elevation Design Projects" },
                  { path: "projects/floor", label: "Floor Plan Projects" },
                  { path: "projects/interior", label: "Interior Projects" }
                ].map(item => (
                  <Link key={item.path} to={item.path} onClick={() => setOpenDropdown(null)} className="block px-2 py-1 hover:text-black hover:bg-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact">Contact</Link>
        </div>

        {/* Login & Signup Buttons (Desktop) */}
        <div className='hidden sm:flex items-center space-x-4'>
          <button className='text-sm border border-white  px-3 py-2 rounded cursor-pointer' onClick={handleOnClick}>Login</button>
          <button className='text-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-sm hover:shadow-md transition duration-300 cursor-pointer' onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
    </nav>  
  );
}
