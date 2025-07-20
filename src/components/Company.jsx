import React, { useEffect, useRef } from "react";

import image from "../assets/image2.jpg";
import image1 from "../assets/image3.jpg";
import image2 from "../assets/image4.jpg";
import image3 from "../assets/image5.jpg";
import image4 from "../assets/image6.jpg";
import image5 from "../assets/image7.jpg";

const Company = () => {
  const images = [image, image1, image2, image3, image4, image5];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Scroll continuously
    const scrollStep = () => {
      scrollContainer.scrollLeft += 1;

      // When half scrolled, reset to start smoothly
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollStep, 20); // adjust speed

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="px-4 py-10 text-center mt-10">
      <h1 className="text-5xl font-bold mb-2">Trusted by the Best</h1>
      <p className="text-black font-normal mb-6 pt-5">Brands Shaping Our Construction Standards</p>

      <div
        className="overflow-x-hidden whitespace-nowrap"
        ref={scrollRef}
      >
        <div className="flex gap-6 w-max">
          {images.concat(images).map((img, index) => (
            <div
              key={index}
               className="block w-70 sm:w-64 h-32 sm:h-36 rounded shadow-md flex-shrink-0 bg-white p-2"
            >
              <img
                src={img}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
