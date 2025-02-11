import React, { useState, useEffect } from "react"; 
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Loading from "./components/Loading.js"; 
import Course from "./components/Course.js";
import Tech from "./components/Tech.js";
import AdvisementPopup from "./components/AdvisementPopup.js"; // Import the popup

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AdvisementPopup /> {/* Show the popup when the page loads */}
          <Header />
          <Hero />
          <About />
          <Services />
          <Course />
          <Tech />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
