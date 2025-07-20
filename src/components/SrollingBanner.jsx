import React from "react";

const words = [
  "SECURE",
  "INTERACTIVE",
  "SCALABLE",
  "USER-FRIENDLY",
  "MAINTAINABLE",
  "OPTIMIZED",
  "RESPONSIVE",
  "RELIABLE",
  "EFFICIENT",
  "ACCESSIBLE",
];

const Banner = () => {
  return (
    <div className="relative w-full h-[120px] bg-[#0f172a] overflow-hidden z-0">
      {/* Rotated inner banner */}
      <div className="absolute w-[250%] -left-1/4 top-1/2 -translate-y-1/2 rotate-[-3deg] z-10">
        <div className="bg-gradient-to-r from-teal-400 to-cyan-400 py-4">
          <div className="flex animate-marquee space-x-8 text-slate-900 text-lg sm:text-xl font-extrabold uppercase whitespace-nowrap px-4">
            {[...words, ...words].map((word, index) => (
              <span key={index} className="flex items-center gap-2 opacity-90">
                <span className="text-cyan-900 text-xl">✦</span> {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
