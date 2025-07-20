import React from "react";
import image from '../assets/image89.jpg'
import image1 from '../assets/image44.jpg';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black text-white">
      
      {/*  Hero Section */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={image1}
            alt="Khan Construction"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              About Khan Construction
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Khan Construction is a trusted name in construction based in Ujjain,
              MP. We specialize in both residential and commercial projects.
              With a team of experienced engineers and craftsmen, we transform
              your vision into reality — beautifully and structurally.
            </p>
          </div>
        </div>
      </section>

      {/*  Mission & Vision */}
      <section className="bg-[#111] py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-red-500">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To deliver world-class construction services by blending innovation,
              technology, and skilled labor.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-red-500">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To be recognized as the most trusted construction brand by building
              strong, sustainable, and stylish spaces for generations.
            </p>
          </div>
        </div>
      </section>

      {/*  Why Choose Us */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-red-500">Khan Construction</span>?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {[
              "40+ Years of Experience",
              "Affordable Pricing",
              "Quality Materials",
              "On-Time Delivery",
              "Expert Engineers & Architects",
              "Customer-Centric Approach"
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-5 hover:bg-gray-900 transition"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Team Section */}
      <section className="bg-[#111] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="p-4 bg-black rounded-lg shadow-md hover:shadow-red-500/20 transition"
              >
                <img
                  src={image}
                  alt="Team Member"
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Engineer {i + 1}</h3>
                <p className="text-gray-400">Site Supervisor</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Call to Action */}
      <section className="bg-gradient-to-r from-red-800 to-black text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
        <p className="mb-6 text-gray-200">
          Let’s work together to turn your vision into reality. Contact us today!
        </p>
        <Link to="/contact">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
            Contact Us
          </button>
        </Link>
      </section>

    </div>
  );
};

export default About;
