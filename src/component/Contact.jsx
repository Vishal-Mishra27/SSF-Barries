import React, { useState } from "react";
import Image from "../assets/images/contact.jsx-removebg-preview.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your quote request has been submitted!");
    console.log(formData);
  };

  return (
    <div
      className="bg-gradient-to-r from-green-800 to-green-600 text-white p-10 flex flex-col lg:flex-row items-center space-y-10 min-h-screen"
      id="contact"
    >
      {/* Image on the Left Side Centered */}
      <div className="w-full md:w-3/4 lg:w-1/2 flex items-center justify-center">
        <img src={Image} alt="Berry Ice Cream" />
      </div>

      {/* Contact Info & Form */}
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col space-y-6">
        <h2
          className="text-4xl font-extrabold text-yellow-400 text-center"
          style={{ fontFamily: "'Cooper Black', serif" }}
        >
          Get in Touch
        </h2>
        <p className="text-center">
          SSF BERRIES, 603 A Wing, Rupa Solitaire Building, Millennium Business
          Park,
          <br />
          Navi Mumbai, Ghansoli, Maharashtra, India – 400701
        </p>
        <p className="text-center font-semibold">+91 8857069147</p>
        <a
          href="mailto:ssfberries@gmail.com"
          className="text-yellow-400 text-center hover:text-yellow-300"
        >
          ssfberries@gmail.com
        </a>
        <div className="border-t border-yellow-400 pt-4 text-center">
          <p className="font-bold">Office Hours</p>
          <p>Monday-Saturday: 10am – 5pm</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white text-black p-6 rounded-xl shadow-2xl w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none col-span-1 md:col-span-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg w-full col-span-1 md:col-span-2 hover:bg-yellow-400 hover:scale-105 transition-transform duration-200"
          >
            Get in Touch →
          </button>
        </form>
        <p className="text-yellow-300 text-center text-sm mt-4">
          We'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;
