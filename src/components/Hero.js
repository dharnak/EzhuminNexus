import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to Ezhumin Nexus</h1>
        <p className="mt-4 text-lg">Empowering businesses with cutting-edge technology</p>
      </motion.div>
    </section>
  );
};

export default Hero;
