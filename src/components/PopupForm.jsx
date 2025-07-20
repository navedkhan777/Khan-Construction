import React, { useState } from 'react';
// import './PopupForm.css';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Tell Us About Your Dream</h2>
        <p>For Best Quality Construction At Affordable Rates</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number *</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter Your 10 Digit Mobile No."
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
            />
          </div>

          <div className="form-group">
            <label>Requirement</label>
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
            >
              <option value="">Select Requirement</option>
              <option value="Construction plan">Construction plan</option>
              <option value="Location Preference">Location Preference</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;