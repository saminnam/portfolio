import { useEffect, useState } from "react";
import portfolioData from "../data/portfolios.json";
import { SiOpencv } from "react-icons/si";

const Projects = () => {
  const [active, setActive] = useState("Own Portfolios");
  const [ownPortfolios, setOwnPortfolios] = useState([]);
  const [companyPortfolios, setCompanyPortfolios] = useState([]);

  useEffect(() => {
    const { OwnPortfolios, CompanyPortfolios } = portfolioData;
    setOwnPortfolios(OwnPortfolios);
    setCompanyPortfolios(CompanyPortfolios);
  }, []);

  return (
    <section id="projects">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center">
          <div className="mb-8 max-w-3xl w-full text-center">
            <h2
              className="mb-4 mt-6 text-3xl font-bold md:text-5xl font-serif"
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              Portfolios
            </h2>
            <p className="mx-auto mt-4 text-gray-500">
              Get inspired by design and websites
            </p>
            <div className="relative mx-auto gap-3 flex-col md:flex-row mt-8 flex w-fit cursor-pointer roundetext-xl md:mt-12">
              <div
                onClick={() => setActive("Own Portfolios")}
                className={`relative px-5 py-2 transition-all duration-2000 ${
                  active === "Own Portfolios"
                    ? "border-e-2 border-b-2 shadow-lg border-blue-800"
                    : "text-gray-500"
                }`}
              >
                Own Project's
              </div>
              <div
                onClick={() => setActive("Company Portfolios")}
                className={`relative px-5 py-2 transition-all duration-2000 ${
                  active === "Company Portfolios"
                    ? "border-e-2 border-b-2 shadow-lg border-blue-800"
                    : "text-gray-500"
                }`}
              >
                Client's Porject's
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10 lg:grid-cols-3 items-center lg:gap-16 md:gap-10 justify-center">
            {active === "Own Portfolios" && (
              <>
                {/* Own Portfolios Items */}
                {ownPortfolios.map((project) => (
                  <div
                    key={project.id}
                    className="md:w-[400px] group relative h-full w-full border border-solid hover:!scale-105 transition-all !duration-300 ease-linear rounded-lg border-gray-300"
                    data-aos={project.dataAos}
                    data-aos-duration={project.aosDuration}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title}-img`}
                      loading="lazy"
                      className="max-h-64 object-cover w-full rounded-t-lg"
                    />
                    <div className="px-5 py-8 sm:px-6">
                      <h5 className="mb-3 text-xl font-bold">
                        {project.title}
                      </h5>
                      <p className="text-gray-500">{project.description}</p>

                      <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                        {project.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800"
                          >
                            <p>{tag}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <a
                          href={project.link}
                          className="flex max-w-full gap-2.5 font-bold uppercase"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Visit Website</p>
                          <img
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                            alt="arrow-img"
                            className="inline-block"
                          />
                        </a>
                      </div>
                      <div className="absolute bottom-2 right-2 text-7xl group-hover:rotate-180 transition-all duration-700 ease-linear text-gray-100">
                        <SiOpencv />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {active === "Company Portfolios" && (
              <>
                {/* Company Portfolios Items */}
                {companyPortfolios.map((project) => (
                  <div
                    key={project.id}
                    className="md:w-[400px] group relative h-full w-full border border-solid hover:scale-105 transition-all duration-300 ease-linear rounded-lg border-gray-300"
                    data-aos={project.dataAos}
                    data-aos-duration={project.aosDuration}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title}-img`}
                      loading="lazy"
                      className="max-h-64 object-cover w-full rounded-t-lg"
                    />
                    <div className="px-5 py-8 sm:px-6">
                      <h5 className="mb-3 text-xl font-bold">
                        {project.title}
                      </h5>
                      <p className="text-gray-500">{project.description}</p>

                      <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                        {project.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800"
                          >
                            <p>{tag}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <a
                          href={project.link}
                          className="flex max-w-full gap-2.5 font-bold uppercase"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Visit Website</p>
                          <img
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                            alt="arrow-img"
                            className="inline-block"
                          />
                        </a>
                      </div>
                      <div className="absolute bottom-2 right-2 text-7xl group-hover:rotate-180 transition-all duration-700 ease-linear text-gray-100">
                        <SiOpencv />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
