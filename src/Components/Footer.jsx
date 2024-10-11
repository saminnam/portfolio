import React from "react";
import portfolio_logo from "../assets/portfolio_logo.png";
import MediaIcons from "./MediaIcons";

const Footer = () => {
  return (
    <footer className="block">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <a href="#" className="mb-8 inline-block max-w-full text-black">
            <img
              src="https://katharinehansenphd.com/wp-content/uploads/2013/02/portfolio.png"
              alt="logo"
              className="inline-block max-h-10"
            />
          </a>
          <div className="text-center font-semibold">
            <a
              href="#home"
              className="inline-block px-6 py-2 font-bold text-black transition hover:text-blue-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="inline-block px-6 py-2 font-bold text-black transition hover:text-blue-700"
            >
              About
            </a>
            <a
              href="#skills"
              className="inline-block px-6 py-2 font-bold text-black transition hover:text-blue-700"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="inline-block px-6 py-2 font-bold text-black transition hover:text-blue-700"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-2 font-bold text-black transition hover:text-blue-700"
            >
              Contact
            </a>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-52 gap-3">
            <div className="flex items-center">
              <div className="mr-4 w-10 border-t border-white"></div>
              <a
                href="https://www.linkedin.com/in/innamul-hasan-8663b82b8"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block border-2 w-auto h-auto py-1 px-2 rounded-lg hover:bg-blue-800 hover:border-customPurple hover:text-white transition ease-in-out"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/sam_innam/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block border-2 w-auto h-auto py-2 px-2 rounded-lg hover:bg-blue-800 hover:border-customPurple hover:text-white transition ease-in-out"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/918608373370"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block border-2 w-auto h-auto py-2 px-2 rounded-lg hover:bg-blue-800 hover:border-customPurple hover:text-white transition ease-in-out"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="https://github.com/saminnam"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block border-2 w-auto h-auto py-1 px-2 rounded-lg hover:bg-blue-800  hover:border-customPurple hover:text-white transition ease-in-out"
                aria-label="Facebook"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
