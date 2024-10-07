import React, { useEffect } from "react";
import innamImg from "../assets/innamImg.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import bck from '../assets/bck_v1.mp4';

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="#" className="relative w-full h-screen overflow-hidden">
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
        <div className="flex justify-between items-center">
          <div className="text-white" data-aos="fade-up">
            <h1 className="text-[60px] font-serif">Mr: Innamul Hasan</h1>
            <h1 className="lg:text-[60px] font-serif text-[40px]">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  1000,
                  "Java Full Stack Developer",
                  1000,
                  "UI Web Designer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="w-[560px] font-mono text-justify mt-5">
              As a Front-End Developer, I specialize in building interactive,
              user-friendly web applications using modern technologies like
              React, JavaScript, and CSS. My focus is on creating responsive and
              optimized interfaces that enhance user experience.
            </p>
          </div>

          <div className="w-[400px] h-[450px] flex items-center justify-center">
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
