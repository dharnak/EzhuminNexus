import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ezhumin Nexus</h1>

        {/* Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Items */}
        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500} 
                  className="cursor-pointer hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
