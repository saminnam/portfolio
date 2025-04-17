import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adventure from "../../public/assets/images/cmp-logos/adventure-logo.png";
import mantraaz from "../../public/assets/images/cmp-logos/digital-logo.png";
import google from "../../public/assets/images/cmp-logos/google.logo.webp";
import microsoft from "../../public/assets/images/cmp-logos/microsoft-logo.png";
import tcs from "../../public/assets/images/cmp-logos/tcs-logo.webp";
import accenture from "../../public/assets/images/cmp-logos/accenture-logo.png";
import zoho from "../../public/assets/images/cmp-logos/zoho-logo.png";
import dlf from "../../public/assets/images/cmp-logos/dlf-logo.svg";
import wipro from "../../public/assets/images/cmp-logos/wipro-logo.png";
import hexaware from "../../public/assets/images/cmp-logos/hexaware-logo.png";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const datas = [
    {
      logo: adventure,
      cmpLink: "https://adventuretechnologysolutions.com/",
      cmpName: "Adventure Tecnology Solutions PVT LTD",
      status: "Past",
    },
    {
      logo: mantraaz,
      cmpLink: "https://www.digitalmantraaz.com/",
      cmpName: "Digital Mantraaz",
      status: "Present",
    },
    {
      logo: google,
      cmpLink: "",
      cmpName: "Google",
      status: "Future",
    },
    {
      logo: microsoft,
      cmpLink: "https://www.microsoft.com/en-in",
      cmpName: "Microsoft",
      status: "Future",
    },
    {
      logo: tcs,
      cmpLink: "https://www.tcs.com/",
      cmpName: "TCS",
      status: "Future",
    },
    {
      logo: accenture,
      cmpLink: "https://www.accenture.com/in-en",
      cmpName: "Accenture",
      status: "Future",
    },
    {
      logo: zoho,
      cmpLink: "https://www.zoho.com/",
      cmpName: "Zoho",
      status: "Future",
    },
    {
      logo: dlf,
      cmpLink: "https://www.dlf.in/offices/chennai/",
      cmpName: "DLF",
      status: "Future",
    },
    {
      logo: wipro,
      cmpLink: "https://www.wipro.com/",
      cmpName: "Wipro",
      status: "Future",
    },
    {
      logo: hexaware,
      cmpLink: "https://hexaware.com/",
      cmpName: "Hexaware",
      status: "Future",
    },
  ];

  return (
    <section className="bg-[url('./assets/bg-company.jpeg')] relative bg-cover bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-[#00000063]"></div>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-28">
        <div className="flex flex-col text-white items-center text-center">
          <h2
            className="text-3xl text-white font-bold md:text-5xl font-serif text-center"
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            Worked With & Open To
          </h2>
          <p className="mb-8 mt-4 max-w-lg text-base z-40 text-white md:mb-12 md:text-lg lg:mb-16">
            Collaborated with brands to build clean, responsive, and
            user-focused web experiences. Open to new front-end opportunities.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {datas.map((data, index) => (
              <div key={index} className="px-4">
                <a href={data.cmpLink} title={data.status}>
                  <img
                    className="object-contain w-auto h-20 hover:scale-105 mx-auto filter brightness-0 invert hover:filter-none transition duration-300 ease-linear"
                    src={data.logo}
                    alt={data.cmpName}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companies;
