import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-form-container">
      <div className="text">Contact us Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <div className="underline"></div>
            <label>First Name</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="website"
              required
              value={formData.website}
              onChange={handleChange}
            />
            <div className="underline"></div>
            <label>Website Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              rows="8"
              cols="80"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="underline"></div>
            <label>Write your message</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
