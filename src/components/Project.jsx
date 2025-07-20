  import React from 'react';

  import image1 from "../assets/image37.jpg";
  import image2 from "../assets/image36.jpg";
  import image3 from "../assets/image38.jpg";
  import image4 from "../assets/image39.jpg";
  import image5 from "../assets/image40.jpg";
  import image6 from "../assets/image41.jpg";
import { useNavigate } from 'react-router-dom';

  const teamMembers = [
    {
      role: 'Construction Project',
      description: "Explore Our Premier Construction Projects Projects!",
      image: image1,
    },
    {
      role: 'Elevation-Design',
      description: "Take a Look at Our Stunning Elevation Projects!",
      image: image2,
    },
    {
      role: 'Floor Plan',
      description: "Experience Our Well-Designed Floor Plans plans!",
      image: image3,
    },
    {
      role: 'Interior Design',
      description: "Stylish, Modern, Functional, Aesthetic, Elegant, Comfortable!",
      image: image4,
    },
    {
      role: 'Landscape Garden',
      description: "Elegant, Green, Serene, Artistic, Functional, Harmonious functional!",
      image: image5,
    },
    {
      role: 'Smart Home Feature',
      description: "Intelligent, Automated, Secure, Efficient, Connected, Convenient!",
      image: image6,
    },
  ];

  const TeamSection = () => {

    const navigate = useNavigate();

    const handleNavigation = (role) => {
      if (role == "Construction Project") navigate("services/Construction");
      else if (role == "Elevation-Design") navigate("services/Elevation");
      else if(role == "Floor Plan") navigate("services/Floor");
      else if (role === "Interior Design") navigate("services/interior");
      else if (role === "Landscape Garden") navigate("services/landscape");
      else if (role === "Smart Home Feature") navigate("services/smarthome");
    }
    return (
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-20 py-10 bg-gradient-to-br from-[#1b0e11] to-[#d3c4c4]">
        <h2 className="text-center font-extrabold text-3xl md:text-5xl mb-12 text-white">
          View Our Projects
        </h2>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-black shadow-md hover:shadow-2xl rounded-xl overflow-hidden transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.role}
                className="w-full h-[260px] object-cover"
              />
              <div className="p-5 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-[180px]">
                <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">
                  {member.role}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {member.description}
                </p>
                <button onClick={() => handleNavigation(member.role)} className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white border border-white rounded hover:bg-white hover:text-black transition cursor-pointer">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default TeamSection;
