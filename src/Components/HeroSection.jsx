import React, { useEffect } from "react";
import innamImg from "../assets/innamImg.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import bck from '../assets/bck_v1.mp4';
import MediaIcons from "./MediaIcons";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="#" className="relative w-full h-screen overflow-hidden p-7">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bck} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the background */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-50"></div>

      {/* Content on top of video */}
      <div className="z-10 w-full py-32 pt-40 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 lg:justify-between items-center">
          <div className="text-white" data-aos="fade-up">
            <h1 className="lg:text-[50px] text-[30px] font-serif">Mr: Innamul Hasan</h1>
            <h1 className="lg:text-[60px] font-serif text-[32px]">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "UI Web Designer",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="lg:w-[560px] w-full font-mono text-justify mt-5">
              As a Front-End Developer, I specialize in building interactive,
              user-friendly web applications using modern technologies like
              React, JavaScript, and CSS. My focus is on creating responsive and
              optimized interfaces that enhance user experience.
            </p>
            <MediaIcons />
          </div>

          <div className="lg:w-[400px] lg:h-[450px] w-[300px] h-[250px] flex items-center justify-center">
            <div className="container noselect z-0">
              <div className="canvas">
                {/* Your animated tracker divs */}
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                {/* Continue with your tracker elements */}
                <div id="card">
                  {/* Content for the card */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
