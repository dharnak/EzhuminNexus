import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import img from './img/Black Gold Elegant Company Anniversary Poster (1).png';


const AdvisementPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white p-4 rounded-2xl shadow-lg max-w-md text-center relative mt-16"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <img
            src={img} // Replace with your image URL
            alt="Advisement"
            className="w-full rounded-lg"
          />

          {/* Button to Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </motion.div>
      </div>
    )
  );
};

export default AdvisementPopup;
