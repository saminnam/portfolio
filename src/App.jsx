import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import AOS from "aos";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });

    loadingCaller(); // Call the function when component mounts
  }, []);

  function loadingCaller() {
    setLoader(true); // Initially set loader to true
    setInterval(() => {
      setLoader(false); // After 4 seconds, hide the loader
    }, 4000);
  }

  return (
    <>
      {loader === true ? (
        <div className="w-full h-100vh flex items-center justify-center">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div>
      ) : (
        <div className="scroll-smooth">
          <Header />
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
