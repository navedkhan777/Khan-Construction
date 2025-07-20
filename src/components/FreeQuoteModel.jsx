import React from "react";

const freeQuotemodal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[90%] md:w-[500px] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Get Your Free Quote</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default freeQuotemodal;
