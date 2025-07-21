import React from "react";
//import videoImage from "../assets/video-preview.jpg"; // Replace with your image

function Videos() {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          {/* <img
            src={videoImage}
            alt="Construction Video"
            className="rounded-lg shadow-lg w-full"
          /> */}
        </div>

        {/* Right Side Text */}
         {/* Right Side Text */}
<div className="w-full md:w-1/2 text-left">
  <div className="max-w-2xl">
    <h2 className="text-4xl  md:text-5xl font-extrabold text-gray-800 mb-6">
      Let's Build <span className="text-pink-600">With Us</span>
    </h2>
    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
      Now that you have reached so far scrolling, I would like this
      opportunity to discuss your home & building needs. Be it
      construction, designing, or planning, Khan Constructions has
      got name as a reputed construction company in Indore. With a smile
      and dignity, we are happy to have built homes that offer comfort
      spaces. With such expertise and vision, we’re eager to hear about
      your ideas for your home. Please fill out the form, and we’ll soon
      be in touch to chat about making your dream home a reality.
    </p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Videos;
