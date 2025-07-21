import React, { useState } from "react";
import HeroImage from "../assets/image29.jpg";
import Contact from "./Contact";
import Footer from "./Fotter";
import Company from "./Company";
import FreeQuoteModel from "./FreeQuoteModel"; // ✅ Modal import

const steps = [
  { step: "Step 01", title: "Initial Consultation", desc: "We meet with clients to understand their vision, needs, and budget. A site visit helps us evaluate the plot and surroundings. We discuss initial design ideas and assess feasibility.", icon: "🗣️" },
  { step: "Step 02", title: "Design Development", desc: "We create detailed architectural plans, 3D renderings, elevation drawings, and floor plans. Client feedback is incorporated to ensure the design meets their expectations.", icon: "📐" },
  { step: "Step 03", title: "Permits and Approvals", desc: "We handle all permit applications and work to secure necessary approvals. Compliance with local building codes and regulations is ensured to prevent legal issues.", icon: "📄" },
  { step: "Step 04", title: "Site Preparation", desc: "The site is cleared and excavated, and the foundation is laid. Essential utilities like water, electricity, and sewage are installed.", icon: "🏗️" },
  { step: "Step 05", title: "Structural Construction", desc: "The main structure of the building is constructed including walls, beams, and slabs. We ensure strong engineering standards throughout the process.", icon: "🏢" },
  { step: "Step 06", title: "Interior Construction", desc: "We begin interior work such as plumbing, electrical, plastering, tiling, doors, and windows fitting to bring the design to life.", icon: "🛠️" },
  { step: "Step 07", title: "Finishing Touches", desc: "We focus on painting, furniture fitting, lighting, and other finishing work to complete the aesthetic of the home.", icon: "🎨" },
  { step: "Step 08", title: "Final Walkthrough", desc: "The final walkthrough ensures everything is perfect and meets the client’s expectations before handing over the keys.", icon: "🔑" },
];

const OurDetailedConstruction = () => {
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  return (
    <div id="construction" className="bg-white text-black">
      {/* 🔹 Hero Section with Image and Text */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Home Construction"
          className="w-full h-[900px] object-cover"
        />

        {/* 🔼 Absolute Text on Top */}
        <div className="absolute inset-0 flex flex-col items-start justify-start text-left px-6 md:px-24 pt-50">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 text-white">
            Building the<br /> Homes of Future
          </h2>
          <p className="text-sm text-white md:text-lg max-w-3xlx sm:text-black">
            Well, you have come to the right place. Khan constructions<br /> is a reputed name
            in the Ujjain city with its beautifully constructed<br /> homes and well designed architecture.
            At Khan, we aim to<br /> elevate not just your homes but your comfort of living!
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
