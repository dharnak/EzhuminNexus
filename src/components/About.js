import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaShieldAlt, FaRobot } from "react-icons/fa";

const services = [
  { id: 1, title: "Web Development", icon: <FaLaptopCode size={40} />, description: "Building modern, fast, and responsive websites with the latest technologies." },
  { id: 2, title: "Mobile App Development", icon: <FaMobileAlt size={40} />, description: "Creating seamless and scalable mobile applications for iOS and Android." },
  { id: 3, title: "Cloud Solutions", icon: <FaCloud size={40} />, description: "Providing cloud-based solutions for efficient and secure data management." },
  { id: 4, title: "Database Management", icon: <FaDatabase size={40} />, description: "Optimizing and maintaining databases for better performance and security." },
  { id: 5, title: "Cyber Security", icon: <FaShieldAlt size={40} />, description: "Ensuring top-tier security for your applications and data from cyber threats." },
  { id: 6, title: "AI & Automation", icon: <FaRobot size={40} />, description: "Integrating AI and automation to streamline business processes effectively." },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our IT Services
      </motion.h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We provide a wide range of IT services to help businesses grow and stay competitive in the digital world.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
