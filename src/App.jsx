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
import ScrollToTopButton from "./Components/ScrollTopBtn";
import "./Components/Global.css";
import Companies from "./Components/Companies";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    loadingCaller();
  }, []);

  function loadingCaller() {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 4000);
  }

  return (
    <>
      {loader === true ? (
        <div className="w-full h-100vh flex items-center justify-center">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : (
        <div className="scroll-smooth">
          <ScrollToTopButton />
          <Header />
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Companies />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
