 
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image44.jpg';
import image2 from '../assets/image48.jpg';
import image3 from '../assets/image48.jpg';
import image4 from '../assets/image44.jpg';

// 🔸 Image Array
const imageGrid = [image1, image2, image3, image4];

// 🔹 Content Object
const mainContent = {
  heading: (
    <>
      DESIGN <span className="text-red-500">BUILD</span> CREATE
    </>
  ),
  paragraph: [
    "A construction is a result of basically three processes – Design, Build, & Create We Design your dream home to allow it to have a realistic structure We Build upon this structure to provide a concrete shape to your home And then we try to Create a home out of your dream, that is both comforting and beautiful Choose Khan Construction, a renowned construction company in Indore, for your home needs."
  ],
  button: {
    label: "Know More About Us",
    link: "/about",
    className:
      "bg-gradient-to-br from-[#1b0e11] to-[#d3c4c4] text-white px-2 py-3 text-xl font-semibold rounded-md hover:bg-black hover:text-white transition duration-300 cursor-pointer"
  }
};

const Maincontent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-8 bg-black text-white">
      
      {/* 🔸 Left Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
        {imageGrid.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>

      {/* 🔹 Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-2xl sm:text-4xl md:text-3xl lg:text-6xl font-bold">
          {mainContent.heading}
        </h2>

        <div className="text-sm md:text-md lg:text-xl xl:text-2xl leading-relaxed text-gray-200 space-y-1">
          {mainContent.paragraph.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <Link to={mainContent.button.link}>
          <button className={mainContent.button.className}>
            {mainContent.button.label}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Maincontent;
