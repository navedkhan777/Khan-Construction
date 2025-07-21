import React, { useState } from "react";
import HeroImage from "../assets/image16.jpg";
import Contact from "./Contact";
import Footer from "./Fotter";
import Company from "./Company";
import FreeQuoteModel from "./FreeQuoteModel"; // ✅ import modal

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
    desc: "We measure the plot accurately, assess its orientation, and incorporate Vastu principles to ensure the floor plan promotes harmony and well-being.",
    icon: "📐",
  },
  {
    step: "Step 03",
    title: "Define Your Requirements",
    desc: "We determine your exact needs: number of rooms, special features, budget, and design preferences, including style, materials, and finishes.",
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
    title: "Detailed Floor Plan",
    desc: "We create initial sketches, develop comprehensive 2D floor plans, and ensure the layout is practical, meets your needs, and aligns with Vastu principles.",
    icon: "🏢",
  },
  {
    step: "Step 06",
    title: "Review and Approval",
    desc: "We present the detailed floor plan, incorporate your feedback, make necessary adjustments, and obtain your final approval to proceed.",
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
  const [showModal, setShowModal] = useState(false); // ✅ modal state

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
            Khan's Blueprint <br />for Beautiful Living !
          </h2>
          <p className="text-white text-sm md:text-lg max-w-3xlx">
            One initial step in home construction is floor planning. Floor planning is like a sketch<br />
            of your home viewed from a bird’s eye. It’s a scale drawing of a home viewed from<br />
            above. So, if you are looking for floor planning services in Ujjian, Khan has got<br />
            some skilled hands & creative minds!
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition cursor-pointer">
              Explore Our Project
            </button>
            <button
              onClick={() => setShowModal(true)} // ✅ open modal
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

      {/* ✅ Free Quote Modal at bottom */}
      <FreeQuoteModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default OurDetailedConstruction;
