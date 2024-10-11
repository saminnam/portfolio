import React, { useState } from "react";
import hostel from "../assets/hostel.png";
import food_order from "../assets/food_order.png";
import e_commerce from "../assets/e_commerce.png";
import todo from "../assets/todo.png";
import keyan from "../assets/keyan.png";
import info from "../assets/info.png";
import api_list from "../assets/api.png";
import Converter from "../assets/currency-converter.png";
import calculator from "../assets/calculator.png";
import clock from "../assets/clock.png";

const Projects = () => {
  const [active, setActive] = useState("Own Portfolios");

  return (
    <section id="projects">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Div */}
          <div className="mb-8 max-w-3xl text-center">
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

            {/* Select */}
            <div className="relative mx-auto flex-col md:flex-row mt-8 flex w-fit cursor-pointer rounded-xl bg-gray-100 md:mt-12">
              <div
                onClick={() => setActive("Own Portfolios")}
                className={`relative rounded-lg px-5 py-2 transition-all duration-2000 ${
                  active === "Own Portfolios"
                    ? "bg-blue-800 text-white"
                    : "text-gray-500"
                }`}
              >
                Own Project's
              </div>
              <div
                onClick={() => setActive("Company Portfolios")}
                className={`relative rounded-lg px-5 py-2 transition-all duration-2000 ${
                  active === "Company Portfolios"
                    ? "bg-blue-800 text-white"
                    : "text-gray-500"
                }`}
              >
                Client's Porject's
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="flex flex-wrap justify-center gap-5">
            {active === "Own Portfolios" && (
              <>
                {/* Own Portfolios Items */}
                <div
                  className="mb-12 w-[400px] border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={todo}
                    alt="todo-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Todo-List</h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Developed a Todo List application with features to add new
                      tasks, update existing tasks, and delete tasks, with
                      real-time status updates and persistent data storage for
                      seamless task management.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://innam-todo.netlify.app"
                        className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border rounded-lg border-solid border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={food_order}
                    alt="food-order"
                    loading="lazy"
                    className="max-h-64 w-full object-cover rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 d-xl font-bold">Food-Order Website</h5>
                    <p className="flex-col d-gray-500">
                      {" "}
                      Developed a Food-Order website that allows users to browse
                      products, add items to the cart, and view the cart. The
                      cart page displays the individual prices of products along
                      with the total amount for all items in the cart.{" "}
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://kaleidoscopic-sunburst-75d43c.netlify.app"
                        className="r flex max-w-full gap-2.5 d-sm font-bold uppercase d-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={e_commerce}
                    alt="e-commerce"
                    className="inline-block rounded-t-lg"
                    loading="lazy"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 d-xl font-bold">E-Commerce</h5>
                    <p className="flex-col d-gray-500">
                      {" "}
                      Developed an E-commerce website featuring product
                      displays, accessible after user login. The platform
                      provides a secure login system, allowing customers to view
                      and purchase products once authenticated.{" "}
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>BOOTSTRAP</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://innam-e-commerce.netlify.app"
                        className="r flex max-w-full gap-2.5 d-sm font-bold uppercase d-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={api_list}
                    alt="apilist-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 d-xl font-bold">API Products List</h5>
                    <p className="flex-col d-gray-500">
                      {" "}
                      Create an API Products List using the Fetch API to
                      dynamically retrieve and display product data. This
                      approach ensures real-time updates and seamless
                      integration with external APIs for a responsive product
                      list.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB dESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>API</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://productlistapiproject.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={Converter}
                    alt="currency-converter-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Currency-Converter
                    </h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Build a dynamic Currency Converter using React.js and a
                      reliable API for real-time exchange rates. This
                      React-based app ensures quick and accurate currency
                      conversions with up-to-date data.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>API</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://saminnam.github.io/api-currency-converter/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={calculator}
                    alt="calculator-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Calculator</h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Develop a Calculator project using JavaScript to perform
                      basic arithmetic operations. This interactive calculator
                      offers a user-friendly interface with responsive design
                      for smooth calculations.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://saminnam.github.io/calculator/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={clock}
                    alt="clock-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Clock</h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      uild a real-time clock project using JavaScript to display
                      the current time dynamically. This digital clock updates
                      every second and features a sleek, responsive design.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>JAVASCRIPT</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://saminnam.github.io/simple-clock/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={info}
                    alt="info-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Info-Tech Website
                    </h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Developed a website for Innam Info Technologies to
                      showcase its features, services, and portfolio, enabling
                      efficient management of client projects.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://inamtech.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </>
            )}

            {active === "Company Portfolios" && (
              <>
                {/* Company Portfolios Items */}
                <div
                  className="mb-12 border w-[400px] hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={hostel}
                    alt="hostel-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Hostel Website</h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Developed a website to display hostels with their
                      locations and listed features. Users can book hostel rooms
                      through the booking form provided.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://brindhavanam-hostel.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="mb-12 w-[400px] hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={keyan}
                    alt="keyan-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Keyan-Tech Website
                    </h5>
                    <p className="flex-col text-gray-500">
                      {" "}
                      Developed a website for Keyan Technologies to showcase its
                      features, services, and portfolio, enabling efficient
                      management of client projects.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>WEB DESIGN</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>RESPONSIVE</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://keyantechnologies.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt=""
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
