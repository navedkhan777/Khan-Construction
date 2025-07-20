import React, { useState } from 'react';
import Fotter from "./Fotter";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    requirement: '',
    locationReference: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/contact/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message || "Form submitted successfully!");
    setFormData({ fullName: '', mobileNumber: '', requirement: '', locationReference: '' });
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-gradient-to-br from-[#3a1f25] to-[#565151]">
      <div className="w-full max-w-3xl bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-lg border border-black text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">Tell Us About Your Dream Home</h2>
        <p className="text-sm sm:text-base text-center mb-6">For Best Quality Construction At</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm mb-1">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-2 rounded-sm border border-black text-sm"
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm mb-1">Mobile Number*</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-2 rounded-md border border-black text-sm"
            />
          </div>

          <div>
            <label htmlFor="requirement" className="block text-sm mb-1">Requirement*</label>
            <select
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-2 rounded-md border border-black text-sm"
            >
              <option value="">Select Requirement</option>
              <option value="Construction Plan">Construction Plan</option>
              <option value="Elevation Design">Elevation Design</option>
              <option value="Floor Plan">Floor Plan</option>
              <option value="Interior Design">Interior Design</option>
            </select>
          </div>

          <div>
            <label htmlFor="locationReference" className="block text-sm mb-1">Location Reference*</label>
            <input
              type="text"
              id="locationReference"
              name="locationReference"
              placeholder="Location Reference"
              value={formData.locationReference}
              onChange={handleChange}
              required
              className="w-full bg-black text-white p-2 rounded-md border border-black text-sm"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-[200px] bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
