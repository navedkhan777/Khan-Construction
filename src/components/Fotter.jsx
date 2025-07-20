//  import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//      <footer className="bg-gray-100 text-black py-4 px-6 md:px-20">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">    
//     <div>
//       <h2 className="text-2xl font-bold mb-2">Khan Construction</h2>
//       <p className="text-sm text-black-300">
//         Reliable, affordable, and modern home construction services in Ujjain & Indore.
//       </p>
//     </div>

//     <div>
//       <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
//       <ul className="space-y-1">
//         <li><a href="/" className="hover:text-yellow-400">Home</a></li>
//         <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
//         <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
//         <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
//       </ul>
//     </div>

//     <div>
//       <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
//       <div className="flex space-x-4">
//         <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
//         <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
//         <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
//         <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
//       </div>
//     </div>

//   </div>

//   <div className="border-t border-gray-700 mt-4 pt-2 text-center text-sm text-black">
//     &copy; {new Date().getFullYear()} Khan Construction. All rights reserved.
//    </div>
//  </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#bb2649] to-[#565151] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Khan Construction</h2>
          <p className="text-sm text-gray-200">
            Reliable, affordable, and modern home construction services in
            Ujjain & Indore.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-300 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Khan Construction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
