import React, { useState } from "react";
import HeroImage from "../assets/image13.jpg";
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
    title: "Space Planning",
    desc: "We measure your space and create floor plans, decide on furniture layout, ensure optimal space use, and follow Vastu principles for positive energy flow.",
    icon: "📐",
  },
  {
    step: "Step 03",
    title: "Concept Development",
    desc: "Develop design concepts and themes that reflect your personality. Create mood boards and color schemes to visualize the overall look.",
    icon: "📄",
  },
  {
    step: "Step 04",
    title: "Design Development",
    desc: "Select materials, finishes, and furnishings. Provide detailed drawings and 3D renderings to help you visualize the design before implementation.",
    icon: "🏗️",
  },
  {
    step: "Step 05",
    title: "Budgeting and Scheduling",
    desc: "Estimate costs for materials, labor, and other expenses. Create a project timeline and schedule to ensure the project is completed on time.",
    icon: "🏢",
  },
  {
    step: "Step 06",
    title: "Vastu Integration",
    desc: "Ensure the design aligns with Vastu principles for health, wealth, and happiness. Optimize room, furniture, and decor placement according to Vastu.",
    icon: "🛠️",
  },
  {
    step: "Step 07",
    title: "Installation and Styling",
    desc: "Install furniture, fixtures, and accessories. Style the space with decor elements to bring the design vision to life, ensuring a cohesive look.",
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
          className="w-full h-[900px] object-cover"
        />

        {/* 🔼 Absolute Text on Top */}
        <div className="absolute inset-0 flex flex-col items-start justify-start text-left px-6 md:px-24 pt-50">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
            We are Designing <br />
            Interiors in Ujjain!
          </h2>
          <p className="text-white text-sm md:text-lg max-w-3xlx">
            First impressions matter, but what lasts is what’s inside. At
            Samasthiti Constructions, we
            <br />
            focus on the interiors of your home with our creative team of
            interior designers in Indore.
            <br />
            We are not just any interior designers in Indore; we are a team of
            qualified and innovative
            <br />
            professionals, elevating home interiors across the city. If you’re
            looking for top-notch
            <br />
            interior designing services in Indore, Samasthiti is your perfect
            choice! Connect with us
            <br />
            for all your interior designing needs and experience the
            difference.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition cursor-pointer">
              Explore Our Project
            </button>
            <button
              onClick={() => setShowModal(true)} // ✅ Show modal
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
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
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

      {/* ✅ Free Quote Modal */}
      <FreeQuoteModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default OurDetailedConstruction;
