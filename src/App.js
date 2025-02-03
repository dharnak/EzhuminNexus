import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 
const App = () => {
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
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
