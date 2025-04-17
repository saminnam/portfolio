import img1 from "../assets/web-design.jpg";
import img2 from "../assets/web-develop.jpeg";
import img3 from "../assets/landing-page.png";

const Services = () => {
  const servicesData = [
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
    {
      title: "Website Revamp",
      description:
        "Revamping a website means refreshing its design, structure, and functionality to align with modern standards and user expectations. It involves improving responsiveness, performance, and visual appeal—while integrating updated HTML, CSS, and SEO practices to boost engagement and search visibility.",
      imgSrc: img1,
      alt: "Revamp",
    },
  ];

  return (
    <section className="bg-gray-50" id="services">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl font-bold md:text-5xl font-serif"
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            Freelancing Services
          </h2>
          <p className="mb-8 mt-4 max-w-lg text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            We provide high-quality freelancing services with a
            satisfaction-first approach. You only pay once you're fully
            satisfied with the final outcome—no upfront payments, just results
            you’ll love!
          </p>
        </div>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="grid gap-6 hover:bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/pipes.png')] bg-cover bg-no-repeat bg-white group cursor-pointer rounded-md border border-solid border-gray-300 p-8 md:p-10 hover:border-blue-700"
              data-aos="fade-up"
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
