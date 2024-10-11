import React, { useState, useEffect } from "react";
import portfolio_logo from "../assets/portfolio.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true); // Change background when you scroll past the first section
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`z-50 fixed top-0 inset-x-0 text-white transition-shadow duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-4">
            <a href="#">
              <img src={portfolio_logo} alt="" width={200} />
            </a>
            <div className="hidden lg:flex lg:flex-row lg:space-x-6">
              <a
                href="#"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500"
              >
                HOME
              </a>
              <a
                href="#about"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500"
              >
                ABOUT
              </a>
              <a
                href="#skills"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500"
              >
                SKILLS
              </a>
              <a
                href="#projects"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500"
              >
                CONTACT
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="absolute right-5 lg:hidden bg-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>

            <div
              className={`lg:hidden flex flex-col items-center justify-center text-black gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <a href="/" className="font-inter px-4 py-2 hover:text-blue-600">
                HOME
              </a>
              <a
                href="#about"
                className="font-inter px-4 py-2 hover:text-blue-600"
              >
                ABOUT
              </a>
              <a
                href="#skills"
                className="font-inter px-4 py-2 hover:text-blue-600"
              >
                SERVICES
              </a>
              <a
                href="#projects"
                className="font-inter px-4 py-2 hover:text-blue-600"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="font-inter px-4 py-2 hover:text-blue-600"
              >
                CONTACT
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
