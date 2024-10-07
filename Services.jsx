import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Web Design",
      description:
        "Web design involves creating visually appealing, user-friendly websites that prioritize responsive layouts and optimized performance. Key aspects include HTML, CSS, and SEO integration for enhancing user experience and search engine rankings.",
      imgSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2020/09/1dbb4a00f3b2d8e85691bea98a621885.jpg",
      alt: "design",
    },
    {
      title: "Web Development",
      description:
        "Web development focuses on building and maintaining websites using programming languages like React Js. It includes both front-end and back-end development, ensuring functionality, performance, and scalability.",
      imgSrc:
        "https://th.bing.com/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?rs=1&pid=ImgDetMain",
      alt: "development",
    },
    {
      title: "App Development",
      description:
        "App development involves designing and building mobile or web applications using languages like Java, Swift, or React Native. Key aspects include user interface (UI) design, performance optimization, and cross-platform compatibility.",
      imgSrc:
        "https://img.freepik.com/premium-photo/phone-mobile-application-development-concept-mobile-internet-3d-illustration_76964-5164.jpg?w=2000",
      alt: "app-development",
    },
  ];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl font-serif">
            Services
          </h2>
          <p className="mb-8 mt-4 max-w-lg text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            We offer top-quality services, ensuring satisfaction with your
            website before any payment is required. Pay only when you're
            completely happy with the final results!
          </p>
        </div>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10"
            >
              <img
                src={service.imgSrc}
                alt={service.alt}
                className="inline-block h-16 w-16 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-500 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
