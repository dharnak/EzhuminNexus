import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaShieldAlt, FaRobot, FaCogs, FaShoppingCart, FaChartLine } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaLaptopCode size={40} />,
    description: "Building modern, scalable, and responsive websites tailored to your business needs.",
    details: "We use the latest frameworks like React, Angular, and Vue to ensure a seamless web experience.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: <FaMobileAlt size={40} />,
    description: "Creating intuitive and high-performance mobile applications for iOS and Android.",
    details: "We develop native and cross-platform apps using React Native, Flutter, and Swift.",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    icon: <FaCloud size={40} />,
    description: "Providing cloud-based services, hosting, and storage solutions.",
    details: "We work with AWS, Google Cloud, and Azure to ensure secure and scalable cloud infrastructure.",
  },
  {
    id: 4,
    title: "Database Management",
    icon: <FaDatabase size={40} />,
    description: "Optimizing and managing databases for efficient data handling.",
    details: "We work with SQL, NoSQL, and cloud databases for optimal performance and security.",
  },
  {
    id: 5,
    title: "Cyber Security",
    icon: <FaShieldAlt size={40} />,
    description: "Ensuring security against cyber threats and data breaches.",
    details: "Our services include penetration testing, threat analysis, and firewall implementation.",
  },
  {
    id: 6,
    title: "AI & Automation",
    icon: <FaRobot size={40} />,
    description: "Implementing AI-powered solutions to automate business processes.",
    details: "We develop machine learning models, chatbots, and AI-based decision systems.",
  },
  {
    id: 7,
    title: "IT Consulting",
    icon: <FaCogs size={40} />,
    description: "Providing expert guidance for IT infrastructure and software development.",
    details: "We help businesses strategize and optimize their IT systems for efficiency.",
  },
  {
    id: 8,
    title: "E-Commerce Development",
    icon: <FaShoppingCart size={40} />,
    description: "Building powerful and secure e-commerce platforms.",
    details: "We develop feature-rich e-commerce websites using Shopify, WooCommerce, and Magento.",
  },
  {
    id: 9,
    title: "Digital Marketing & SEO",
    icon: <FaChartLine size={40} />,
    description: "Enhancing online presence through SEO and digital marketing strategies.",
    details: "We provide SEO, PPC, and social media marketing to boost brand visibility.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We provide a wide range of IT services to help businesses grow and innovate.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="p-6 bg-gray-100 shadow-lg rounded-lg text-center flex flex-col items-center space-y-4 cursor-pointer hover:bg-blue-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedService(service)}
          >
            <div className="text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button className="absolute top-2 right-2 text-gray-500 text-xl" onClick={() => setSelectedService(null)}>
              &times;
            </button>
            <div className="text-blue-500">{selectedService.icon}</div>
            <h3 className="text-2xl font-bold mt-2">{selectedService.title}</h3>
            <p className="text-gray-600 mt-2">{selectedService.details}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;
