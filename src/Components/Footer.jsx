const Footer = () => {
  return (
    <footer className="relative bg-[url('./assets/bg-img.avif')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000] bg-opacity-40 z-0"></div>
      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center">
          <a href="#" className="mb-8 inline-block max-w-full text-black">
            <h2 className="font-bold text-4xl text-white">Innamul Hasan. Y</h2>
          </a>
          <div className="text-center font-semibold">
            {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="inline-block px-6 py-2 font-semibold text-white transition-all duration-300 ease-linear hover:text-blue-700"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="mb-8 mt-4 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid grid-cols-4 grid-flow-col gap-3 max-w-52">
            <div className="flex items-center">
              <div className="mr-4 w-10 border-t border-white"></div>
              {[
                {
                  href: "https://www.linkedin.com/in/innamul-hasan-8663b82b8",
                  icon: "bi-linkedin",
                },
                {
                  href: "https://www.instagram.com/sam_innam/?__pwa=1",
                  icon: "bi-instagram",
                },
                {
                  href: "https://wa.me/918608373370",
                  icon: "bi-whatsapp",
                },
                {
                  href: "https://github.com/saminnam",
                  icon: "bi-github",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-block border-2 border-gray-300 py-2 px-2 rounded-lg hover:bg-blue-800 hover:border-blue-700 hover:text-white transition ease-in-out text-white"
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-center py-3 bg-[#000] text-white">
        © 2024. All rights reserved. Designed and developed by{" "}
        <b>Innamul Hasan.</b>
      </p>
    </footer>
  );
};

export default Footer;
