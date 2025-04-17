import { useState, useEffect } from "react";
import portfolio_logo from "../assets/portfolio.png";
import { GoListUnordered } from "react-icons/go";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                HOME
              </a>
              <a
                href="#about"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                ABOUT
              </a>
              <a
                href="#skills"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                SKILLS
              </a>
              <a
                href="#projects"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                PROJECTS
              </a>
              <a
                href="#services"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                SERVICES
              </a>
              <a
                href="#contact"
                className="font-inter font-medium text-white rounded-lg px-3 py-4 hover:text-blue-500 transition-all duration-300 ease-linear"
              >
                CONTACT
              </a>
            </div>
            <button
              className="absolute top-8 right-5 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <GoListUnordered className="text-4xl" />
            </button>

            <div
              className={`lg:hidden flex flex-col justify-center text-white gap-3 bg-black w-full h-auto py-7 fixed top-24 left-0 transition-transform duration-500 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <a
                href="/"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                HOME
              </a>
              <a
                href="#about"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ABOUT
              </a>
              <a
                href="#skills"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                SKILLS
              </a>
              <a
                href="#projects"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                PROJECTS
              </a>
              <a
                href="#services"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                SERVICES
              </a>
              <a
                href="#contact"
                className="font-inter px-4 py-2 hover:bg-white transition-all duration-300 ease-linear hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
