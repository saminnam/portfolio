import React from "react";
import portfolio_logo from '../assets/portfolio_logo.png';

const Footer = () => {
  return (
    <footer className="block">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <a href="/" className="mb-8 inline-block max-w-full text-black">
            <img
              src="https://katharinehansenphd.com/wp-content/uploads/2013/02/portfolio.png"
              alt="logo"
              className="inline-block max-h-10"
            />
          </a>
          <div className="text-center font-semibold">
            <a
              href="/"
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
            <a
              href="https://in.linkedin.com/"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://clipground.com/images/linkedin-logo-svg-4.png"
                alt="linkedin"
                className="inline-block"
              />
            </a>
            <a
              href="https://github.com/saminnam"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://pngimg.com/uploads/github/github_PNG80.png"
                alt="git"
                className="inline-block"
              />
            </a>
            <a
              href="https://facebook.com"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://th.bing.com/th/id/OIP.fIIsn9ABgJ5NezP43m5LTwHaHa?rs=1&pid=ImgDetMain"
                alt="facebook"
                className="inline-block"
              />
            </a>
            <a
              href="https://instagram.com"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/692/original/instagram-logo-instagram-icon-transparent-free-png.png"
                alt="insta"
                className="inline-block"
              />
            </a>
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
