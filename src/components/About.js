import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHandshake} from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Mike Johnson", role: "Lead Developer", image: "https://via.placeholder.com/150" },
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
        Who We Are
      </motion.h2>
      <motion.p
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        We are a dedicated team of professionals committed to delivering innovative IT solutions.
      </motion.p>
      
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        {[{
          icon: <FaEye size={40} className="text-blue-500" />, title: "Our Vision", description: "To revolutionize technology by empowering businesses with cutting-edge solutions."
        }, {
          icon: <FaBullseye size={40} className="text-blue-500" />, title: "Our Mission", description: "To provide innovative, scalable, and secure IT solutions that drive success."
        }, {
          icon: <FaHandshake size={40} className="text-blue-500" />, title: "Our Values", description: "Integrity, Innovation, and Excellence in every solution we deliver."
        }].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center space-y-4"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-4xl font-bold mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet the Team
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center space-y-4"
            whileHover={{ scale: 1.1, rotate: -3 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={member.image} 
              alt={member.name} 
              className="w-24 h-24 rounded-full" 
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
