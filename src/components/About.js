import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHandshake} from "react-icons/fa";

const teamMembers = [
  {  name: "Pushpalatha S K",role:"IoT, AI&ML", image: "https://static.vecteezy.com/system/resources/previews/014/194/216/non_2x/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" },
  {  name: "Swethitha K",role:"Digital Marketing" ,image: "https://static.vecteezy.com/system/resources/previews/014/194/216/non_2x/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" },
  {  name: "Prasanna G",role:"Web Devlopment(Full Stack)", image: "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" },
  {  name: "Mohamed Mufeed J",role:"Moile App Development", image: "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" },
  {  name: "Dharneesh M T",role:"Web Development(MERN)" ,image: "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" },
  {  name: "Godeson Joseph G", role:"Developer(Python Django)",image: "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"},
  {  name: "Johnbharathi J", role:"Developer(Java Spring boot)",image: "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" }
]

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
       <div className="abouttitle">Welcome to a team of passionate professionals driven by innovation and excellence. Our commitment to delivering value, we also empower growth through our transformative courses, designed to inspire, educate, and elevate your skills. Together, we shape the future one solution, one learner at a time</div>  
      </motion.p>
      
      <div className="about mt-2 grid md:grid-cols-3 justify-center items-start gap-5 p-16 ">
        {[{
          icon: <FaEye size={40} className="text-blue-500" />, title: "Our Vision", description: "To provide innovative and industry-focused solutions in Artificial Intelligence, IoT, Website and Mobile App Development, and Digital Marketing. Through our expert-led courses in MERN Stack, Full Stack Development, and AI/ML, we aim to equip individuals with the skills needed to thrive in the ever-evolving tech landscape."
        }, {
          icon: <FaBullseye size={40} className="text-blue-500" />, title: "Our Mission", description: "To be a global leader in technological innovation and education, bridging the gap between learning and real-world applications. By offering cutting-edge services and professional training, we aspire to create a community of skilled developers, engineers, and digital creators who drive the future of technology"
        }, {
          icon: <FaHandshake size={40} className="text-blue-500" />, title: "Our Values", description: "Integrity, Innovation, and Excellence in every solution and courses we deliver."
        }].map((item, index) => (
          <motion.div
            key={index}
            className="p-4 h-[350px] bg-white shadow-lg rounded-lg text-center grid justify-items-center space-y-4"
            whileHover={{ scale: 1.05, rotate: 0 }}
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
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Founder's Crew
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="p-4 bg-white shadow-lg rounded-lg text-center flex flex-col items-center space-y-4"
            whileHover={{ scale: 1.05, rotate: 0 }}
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
