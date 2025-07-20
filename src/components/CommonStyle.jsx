import React from 'react';
// import './CommonStyle.css';
import image5 from "../assets/image49.jpg";
import image6 from "../assets/image79.jpg";
import image7 from "../assets/image80.jpg";
import image8 from "../assets/image81.jpg";
import image9 from "../assets/image51.jpg";
import image10 from "../assets/image82.jpg";

const CommonStyle = () => {
  const CommonData = [
    {
      image: image5,
      role: "Initial Consultation",
      description: "Meet client, discuss needs and site.",
    },
    {
      image: image6,
      role: "Get Plot Size",
      description: "Accurate design, Vastu, harmony, well-being.",
    },
    {
      image: image7,
      role: "Create the 2D Floor Plan",
      description: "Apply permits, follow legal rules.",
    },
    {
      image: image8,
      role: "Preliminary Design",
      description: "Architectural style, sketches, drafts, bricks, cladding — we craft with care.",
    },
    {
      image: image9,
      role: "Detailed Design",
      description: "We offer elevation drawings, 3D models, design, materials, textures, and colors.",
    },
    {
      image: image10,
      role: "Client Review",
      description: "Detailed designs, 3D models, feedback, adjustments, and final approval.",
    },
  ];

  return (
    <div>
      {/* All details */}
      <div className="details">
        <h2>
          Our Detailed <span>Construction Process</span>
        </h2>
      </div>

      {/* Floor Plan Projects Section */}
      
        <div className="containers">
          {CommonData.map((ElevationDesign, index) => (
            <div className="box1" key={index}>
              <img src={ElevationDesign.image} alt="image" className="construction-image" />
              <p className="construction-role">{ElevationDesign.role}</p>
              <p className="construction-description">{ElevationDesign.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CommonStyle;


 