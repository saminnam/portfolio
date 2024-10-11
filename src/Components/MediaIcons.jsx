import React from "react";

const MediaIcons = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center">
        <div className="ml-4 mr-4 w-10 border-t border-white"></div>
        <a
          href="https://www.linkedin.com/in/innamul-hasan-8663b82b8"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 inline-block border-2 w-auto h-auto py-1 px-2 rounded-lg hover:bg-customPurple hover:border-customPurple hover:text-white transition ease-in-out"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/sam_innam/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 inline-block border-2 w-auto h-auto py-2 px-2 rounded-lg hover:bg-customPurple hover:border-customPurple hover:text-white transition ease-in-out"
          aria-label="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://wa.me/918608373370"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 inline-block border-2 w-auto h-auto py-2 px-2 rounded-lg hover:bg-customPurple hover:border-customPurple hover:text-white transition ease-in-out"
          aria-label="WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

        <a
          href="https://github.com/saminnam"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 inline-block border-2 w-auto h-auto py-1 px-2 rounded-lg hover:bg-customPurple hover:border-customPurple hover:text-white transition ease-in-out"
          aria-label="Facebook"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default MediaIcons;
