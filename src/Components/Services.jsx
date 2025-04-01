import img1 from "../assets/web-design.jpg";
import img2 from "../assets/web-develop.jpeg";
import img3 from "../assets/landing-page.png";

const Services = () => {
  const servicesData = [
    {
      title: "Web Design",
      description:
        "Web design involves creating visually appealing, user-friendly websites that prioritize responsive layouts and optimized performance. Key aspects include HTML, CSS, and SEO integration for enhancing user experience and search engine rankings.",
      imgSrc: img1,
      alt: "design",
    },
    {
      title: "Web Development",
      description:
        "Web development focuses on building and maintaining websites using programming languages like React Js. It includes both front-end and back-end development, ensuring functionality, performance, and scalability.",
      imgSrc: img2,
      alt: "development",
    },
    {
      title: "Landing pages",
      description:
        "Landing pages are standalone web pages designed to capture user attention and drive specific actions, such as signing up or making a purchase. They focus on clear messaging, engaging visuals, and strong calls-to-action (CTAs).",
      imgSrc: img3,
      alt: "Landing pages",
    },
  ];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl font-bold md:text-5xl font-serif"
            data-aos="flip-down"
            data-aos-duration="1500"
          >
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
              className="grid gap-6 group cursor-pointer rounded-md border border-solid border-gray-300 p-8 md:p-10 hover:border-blue-700"
              data-aos="fade-up"
            >
              <img
                src={service.imgSrc}
                alt={service.alt}
                className="inline-block group-hover:scale-105 transition-all ease-linear duration-300 h-16 w-16 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm group-hover:scale-105 transition-all ease-linear duration-300 text-gray-500 text-justify">
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
