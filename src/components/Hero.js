import React from "react";
import { motion } from "framer-motion";
import '../App.css'

const Hero = () => {
  return (
    <section id="home" className="hame h-screen flex items-center justify-center text-center  text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to Ezhumin Group</h1>
        <p className="mt-4 text-lg">The harder you work for something, the greater you'll feel when you achieve it</p>
      </motion.div>
    </section>
  );
};

export default Hero;
