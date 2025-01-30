import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-200 text-center">
      {/* Contact Heading */}
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      <p className="mt-4 text-lg text-gray-700">We'd love to hear from you. Get in touch today!</p>

      {/* Contact Form */}
      <motion.div
        className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {submitted ? (
          <motion.div
            className="text-green-600 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Your message has been sent successfully!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Social Media Contacts */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Follow Us</h3>
        <div className="flex justify-center space-x-6 mt-4">
          {[
            { icon: <FaFacebook />, url: "https://facebook.com", color: "blue-600" },
            { icon: <FaTwitter />, url: "https://twitter.com", color: "blue-400" },
            { icon: <FaLinkedin />, url: "https://linkedin.com", color: "blue-700" },
            { icon: <FaInstagram />, url: "https://instagram.com", color: "pink-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${social.color} text-3xl transition-transform transform hover:scale-125`}
              whileHover={{ rotate: 10, scale: 1.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <motion.div
        className="mt-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="flex justify-center items-center space-x-3">
          <FaEnvelope className="text-blue-600" /> <span>info@ezhuminexus.com</span>
        </p>
        <p className="flex justify-center items-center space-x-3 mt-2">
          <FaPhone className="text-green-600" /> <span>+91 98765 43210</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
