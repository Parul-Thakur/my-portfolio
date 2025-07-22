"use client"; // Required only for Next.js App Router

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div  id="contact" className="bg-black text-white">
    <motion.div
      className="max-w-3xl mx-auto px-4 py-12   "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Contact
      </h1>
      <p className="text-center text-gray-200 mb-8">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FiUser className="absolute top-3.5 left-3 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#91C8E4]"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute top-3.5 left-3 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#91C8E4]"
          />
        </div>

        <div className="relative">
          <FiMessageCircle className="absolute top-3.5 left-3 text-gray-500" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#91C8E4]"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#845F8A] text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-[#37688d]"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
    </div>
  );
};

export default ContactPage;
