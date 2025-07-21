//  import React from "react";
// import HeroImage from "../assets/image16.jpg"; // Use a relevant home-related image here
// import Contact from "./Contact";
// import Footer from "./Fotter";
// import Company from "./Company";

// const steps = [
//   {
//     step: "Step 01",
//     title: "Initial Consultation",
//     desc: "We meet with clients to understand their vision, needs, and budget. A site visit helps us evaluate the plot and surroundings. We discuss initial design ideas and assess feasibility.",
//     icon: "🗣️",
//   },
//   {
//     step: "Step 02",
//     title: "Get Plot Size & Facing with Vastu",
//     desc: "We measure the plot accurately, assess its orientation, and incorporate Vastu principles to ensure the elevation design promotes harmony and well-being.",
//     icon: "📐",
//   },
//   {
//     step: "Step 03",
//     title: "Create the 2D Floor Plan",
//     desc: "We develop a detailed 2D floor plan, review and adjust it based on your feedback, and incorporate any reference images you provide.",
//     icon: "📄",
//   },
//   {
//     step: "Step 04",
//     title: "Site Preparation",
//     desc: "The site is cleared and excavated, and the foundation is laid. Essential utilities like water, electricity, and sewage are installed.",
//     icon: "🏗️",
//   },
//   {
//     step: "Step 05",
//     title: "Preliminary Design",
//     desc: "We choose the architectural style, create initial sketches and drafts, and select materials like bricks, stones, or cladding.",
//     icon: "🏢",
//   },
//   {
//     step: "Step 06",
//     title: "Detailed Design",
//     desc: "We create detailed elevation drawings, visualize the design with 3D models, and finalize the choice of materials, textures, and colors.",
//     icon: "🛠️",
//   },
//   {
//     step: "Step 07",
//     title: "Client Review",
//     desc: "We present detailed designs and 3D models, incorporate your feedback, make necessary adjustments, and obtain your final approval.",
//     icon: "🎨",
//   },
//   {
//     step: "Step 08",
//     title: "Final Walkthrough",
//     desc: "The final walkthrough ensures everything is perfect and meets the client’s expectations before handing over the keys.",
//     icon: "🔑",
//   },
// ];

// const OurDetailedConstruction = () => {
//   return (
//     <div className="bg-white text-black">

//       {/* 🔹 Hero Section with Image and Text */}
//       <div className="relative">
//   <img
//     src={HeroImage}
//     alt="Home Construction"
//     className="w-full h-[900px] object-cover brightness-75"
//   />

//   {/* 🔼 Absolute Text on Top */}
//   <div className="absolute inset-0 flex flex-col items-start justify-start text-left px-6 md:px-24 pt-50">
//     <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
//        Elevate Your Space<br/>with Samasthiti's
//     </h2>
//     <p className="text-white text-sm md:text-lg max-w-3xlx">
//        Have you ever heard people saying ‘first impression matters’? Well, that’s true for<br/> homes too. Design your home elevation with Indore’s some of the skilled home<br/> elevation design producers. Contact Samasthiti Constructions now!
//     </p>
//     <div className="mt-10 flex flex-wrap gap-4">
//       <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
//         Explore Our Project
//       </button>
//       <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
//         Get Your Free Quote
//       </button>
//     </div>
//   </div>
// </div>


//       {/* 🔸 Step-by-Step Construction Process */}
//       <section className="py-16 px-6 md:px-20 bg-gray-50">
//         <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Our Detailed Construction Process
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {steps.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center group">
//               <div className="relative">
//                 <div className="w-20 h-20 flex items-center justify-center bg-red-100 border border-red-400 rounded-full text-3xl mb-2 transition-all group-hover:scale-105">
//                   {item.icon}
//                 </div>
//                 <p className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
//                   {item.step}
//                 </p>
//               </div>
//               <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
//               <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Company Component */}
//       <div className="bg-white">
//         <Company />
//       </div>

//       {/* 🔹 Contact Section */}
//       <div className="bg-gray-100">
//         <Contact />
//       </div>

//       {/* 🔹 Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default OurDetailedConstruction;


import React, { useState } from "react";
import HeroImage from "../assets/image16.jpg";
import Contact from "./Contact";
import Footer from "./Fotter";
import Company from "./Company";
import FreeQuoteModel from "./FreeQuoteModel"; // ✅ Import the modal

const steps = [
  {
    step: "Step 01",
    title: "Initial Consultation",
    desc: "We meet with clients to understand their vision, needs, and budget. A site visit helps us evaluate the plot and surroundings. We discuss initial design ideas and assess feasibility.",
    icon: "🗣️",
  },
  {
    step: "Step 02",
    title: "Get Plot Size & Facing with Vastu",
    desc: "We measure the plot accurately, assess its orientation, and incorporate Vastu principles to ensure the elevation design promotes harmony and well-being.",
    icon: "📐",
  },
  {
    step: "Step 03",
    title: "Create the 2D Floor Plan",
    desc: "We develop a detailed 2D floor plan, review and adjust it based on your feedback, and incorporate any reference images you provide.",
    icon: "📄",
  },
  {
    step: "Step 04",
    title: "Site Preparation",
    desc: "The site is cleared and excavated, and the foundation is laid. Essential utilities like water, electricity, and sewage are installed.",
    icon: "🏗️",
  },
  {
    step: "Step 05",
    title: "Preliminary Design",
    desc: "We choose the architectural style, create initial sketches and drafts, and select materials like bricks, stones, or cladding.",
    icon: "🏢",
  },
  {
    step: "Step 06",
    title: "Detailed Design",
    desc: "We create detailed elevation drawings, visualize the design with 3D models, and finalize the choice of materials, textures, and colors.",
    icon: "🛠️",
  },
  {
    step: "Step 07",
    title: "Client Review",
    desc: "We present detailed designs and 3D models, incorporate your feedback, make necessary adjustments, and obtain your final approval.",
    icon: "🎨",
  },
  {
    step: "Step 08",
    title: "Final Walkthrough",
    desc: "The final walkthrough ensures everything is perfect and meets the client’s expectations before handing over the keys.",
    icon: "🔑",
  },
];

const OurDetailedConstruction = () => {
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  return (
    <div className="bg-white text-black">
      {/* 🔹 Hero Section with Image and Text */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Home Construction"
          className="w-full h-[900px] object-cover brightness-75"
        />

        {/* 🔼 Absolute Text on Top */}
        <div className="absolute inset-0 flex flex-col items-start justify-start text-left px-6 md:px-24 pt-50">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Elevate Your Space<br />with Khan's
          </h2>
          <p className="text-white text-sm md:text-lg max-w-3xlx">
            Have you ever heard people saying ‘first impression matters’? Well, that’s true for<br />
            homes too. Design your home elevation with Ujjain some of the skilled home<br />
            elevation design producers. Contact Khan Constructions now!
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition cursor-pointer">
              Explore Our Project
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition cursor-pointer"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* 🔸 Step-by-Step Construction Process */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Detailed Construction Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-20 h-20 flex items-center justify-center bg-red-100 border border-red-400 rounded-full text-3xl mb-2 transition-all group-hover:scale-105">
                  {item.icon}
                </div>
                <p className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
                  {item.step}
                </p>
              </div>
              <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
              <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Company Component */}
      <div className="bg-white">
        <Company />
      </div>

      {/* 🔹 Contact Section */}
      <div className="bg-gray-100">
        <Contact />
      </div>

      {/* 🔹 Footer */}
      <Footer />

      {/* ✅ Modal Render */}
      <FreeQuoteModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default OurDetailedConstruction;
