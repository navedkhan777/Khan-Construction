import React, { useState } from "react";
import image from '../assets/image86.jpg';
import FreeQuoteModel from "./FreeQuoteModel"; // ✅ Import modal component

const heroContent = {
  title: "Welcome To Khan Construction",
  Subtitle: "Let's Build A Home For You!",
  description:[
    "Join us at Khan Construction to turn your dream home into reality.",
    "From design to construction, we ensure every detail is perfect.",
    "Let's create the home you've always wanted together."
  ],
  buttons: [
    {
      label: "Explore Our Project",
      className: "bg-black hover:bg-[#bb2649] text-white px-4 py-3 text-sm md:text-base font-medium  hover:text-black transition-all duration-300 rounded-md cursor-pointer"
    },
    {
      label: "Get Your Free Quote",
      className: "bg-black text-white hover:bg-[#bb2649] hover:text-black px-5 py-3 text-sm md:text-base font-semibold transition-all duration-300 rounded-md cursor-pointer"
    }
  ]
};

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false); // ✅ State for modal toggle

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img src={image} alt="construction image" className="absolute inset-0 w-full h-full object-cover z-0"/>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 py-20 md:py-24 lg:py-32 space-y-4">
        <h1 className="text-xl md:text-2xl font-bold">{heroContent.title}</h1>
        <p className="text-3xl md:text-6xl font-bold">{heroContent.Subtitle}</p>

        <div className="max-w-xl text-xs md:text-sm leading-relaxed space-y-1 text-white">
          {heroContent.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className={heroContent.buttons[0].className}>
            {heroContent.buttons[0].label}
          </button>

          <button
            onClick={() => setShowModal(true)}
            className={heroContent.buttons[1].className}
          >
            {heroContent.buttons[1].label}
          </button>
        </div>
      </div>

      {/* 🔽 Modal Render if showModal === true */}
      <FreeQuoteModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default HeroSection;
