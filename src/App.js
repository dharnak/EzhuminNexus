import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Loading from "./components/Loading.js"; 
import Course from "./components/Course.js";
import Tech from "./components/Tech.js"
function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Course/>
          <Tech />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
