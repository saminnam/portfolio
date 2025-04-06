import { useState } from "react";
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
import news from "../assets/news.png";
import form from "../assets/form.png";
import webpage from "../assets/webpage.png";
import flight from "../assets/flight.png";
import productList from "../assets/api-filter.png";
import hostel_crm from "../assets/hostel-dashboard.png";
import keyan_crm from "../assets/keyan-dashboard.png";
import royal_civil from "../assets/royal.png";
import eshwar from "../assets/eshwar.png";
import janav from "../assets/janav.png";
import ocean_land from "../assets/ocean-land-pg.png";

const Projects = () => {
  const [active, setActive] = useState("Own Portfolios");

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
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10 lg:grid-cols-3 items-center lg:gap-16 md:gap-10 justify-center group">
            {active === "Own Portfolios" && (
              <>
                {/* Own Portfolios Items */}
                <div
                  className="mb-12 md:w-[400px] h-full w-full border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={flight}
                    alt="flight-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Flight-Booking</h5>
                    <p className="flex-col text-gray-500">
                      Building an intuitive flight booking website with seamless
                      booking, and responsive design for a smooth user
                      experience.
                    </p>

                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://travel-lift.netlify.app"
                        className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border rounded-lg border-solid border-gray-300 md:mb-8 lg:mb-10"
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
                    <h5 className="mb-3 text-xl font-bold">
                      Food-Order Website
                    </h5>
                    <p className="flex-col text-gray-500">
                      Developed a Food-Order website that allows users to browse
                      products, add items to the cart, and view the cart. The
                      cart page displays the individual prices of products along
                      with the total amount for all items in the cart.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                        href="https://kaleidoscopic-sunburst-75d43c.netlify.app"
                        className="r flex max-w-full gap-2.5 d-sm font-bold uppercase d-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={productList}
                    alt="product-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      API Products List
                    </h5>
                    <p className="flex-col text-gray-500">
                      Built an e-commerce product list page with API-based
                      products, featuring filters (range, category), smooth
                      scrolling, animations, and an "Add to Cart" button.
                      Includes toast notifications on adding products to the
                      cart.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://e-commerce-productlist-api.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={e_commerce}
                    alt="e-commerce"
                    className="inline-block rounded-t-lg"
                    loading="lazy"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">E-Commerce</h5>
                    <p className="flex-col text-gray-500">
                      Developed an E-commerce website featuring product
                      displays, accessible after user login. The platform
                      provides a secure login system, allowing customers to view
                      and purchase products once authenticated.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
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
                      Developed a website for Innam Info Technologies to
                      showcase its features, services, and portfolio, enabling
                      efficient management of client projects.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>BOOTSTRAP</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                    <h5 className="mb-3 text-xl font-bold">
                      API Products List
                    </h5>
                    <p className="flex-col text-gray-500">
                      Create an API Products List using the Fetch API to
                      dynamically retrieve and display product data. This
                      approach ensures real-time updates and seamless
                      integration with external APIs for a responsive product
                      list.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                      Build a dynamic Currency Converter using React.js and a
                      reliable API for real-time exchange rates. This
                      React-based app ensures quick and accurate currency
                      conversions with up-to-date data.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                      Develop a Calculator project using JavaScript to perform
                      basic arithmetic operations. This interactive calculator
                      offers a user-friendly interface with responsive design
                      for smooth calculations.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                      Build a real-time clock project using JavaScript to
                      display the current time dynamically. This digital clock
                      updates every second and features a sleek, responsive
                      design.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
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
                      Developed a Todo List application with features to add new
                      tasks, update existing tasks, and delete tasks, with
                      real-time status updates and persistent data storage for
                      seamless task management.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
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
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={news}
                    alt="news-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Newspaper Template
                    </h5>
                    <p className="flex-col text-gray-500">
                      Developed a newspaper template using HTML and CSS as a
                      beginner project to showcase my strong skills in web
                      layout and styling, demonstrating proficiency in both HTML
                      structure and CSS design techniques.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>DESIGN LAYOUT</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://saminnam.github.io/Newspaper/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={form}
                    alt="form-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Form Validation</h5>
                    <p className="flex-col text-gray-500">
                      Developed a user authentication project that includes both
                      login and signup forms using HTML, CSS, and JavaScript.
                      This beginner project allows users to register and access.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>CSS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>JAVASCRIPT</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href=" https://saminnam.github.io/form-validation/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={webpage}
                    alt="webpage-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Beginner Webpage</h5>
                    <p className="flex-col text-gray-500">
                      I have developed a beginner project using HTML and CSS
                      with an appealing layout.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>CSS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://saminnam.github.io/beginner-website/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {active === "Company Portfolios" && (
              <>
                {/* Company Portfolios Items */}
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                      Developed a website to display hostels with their
                      locations and listed features. Users can book hostel rooms
                      through the booking form provided. (Only admin can under
                      development process)
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>BOOTSTRAP</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://www.brindhavanamhostels.com/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 md:w-[400px] h-full w-full  hover:shadow-xl border border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
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
                      Developed a website for Keyan Technologies to showcase its
                      features, services, and portfolio, enabling efficient
                      management of client projects. (Currently under
                      development process)
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://www.keyantechnologies.com/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={hostel_crm}
                    alt="hostel-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Hostel Dashboard</h5>
                    <p className="flex-col text-gray-500">
                      The Hostel Management Dashboard is a web-based application
                      designed for administrators to manage room details, track
                      availability, and oversee user bookings. (Currently under
                      development process)
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://admin-access-hostel.netlify.app/login"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={keyan_crm}
                    alt="keyan-crm"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Keyan Technologies Dashboard
                    </h5>
                    <p className="flex-col text-gray-500">
                      The Keyan Technologies Dashboard is a dynamic admin panel
                      that allows seamless management of website content
                      (Currently under development process)
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="keyan-dashboard.netlify.app"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={royal_civil}
                    alt="royal-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Royal Civil Tech</h5>
                    <p className="flex-col text-gray-500">
                      The Royal Civil Tech website is a construction-focused
                      platform designed to generate leads, showcase projects,
                      and enhance brand visibility.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML & CSS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>JAVASCRIPT</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>BOOTSTRAP</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://royalciviltech.com/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={eshwar}
                    alt="eshwar-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Eshwar Construction
                    </h5>
                    <p className="flex-col text-gray-500">
                      The Eshwar Construction website is a construction-focused
                      platform designed to generate leads, showcase projects,
                      and enhance brand visibility.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>REACT JS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://eshwarconstruction.in/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={janav}
                    alt="janav-img"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">Janav Housing</h5>
                    <p className="flex-col text-gray-500">
                      The Janav Housing website is a construction-focused
                      platform designed to generate leads, showcase projects,
                      and enhance brand visibility.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML & CSS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>JAVASCRIPT</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>BOOTSTRAP</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* <a
                        href="https://www.brindhavanamhostels.com/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT WEBSITE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 border md:w-[400px] h-full w-full  hover:shadow-xl border-solid rounded-lg border-gray-300 md:mb-8 lg:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={ocean_land}
                    alt="ocean-land"
                    loading="lazy"
                    className="max-h-64 object-cover w-full rounded-t-lg"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <h5 className="mb-3 text-xl font-bold">
                      Ocean-Housing Landing Page
                    </h5>
                    <p className="flex-col text-gray-500">
                      The Ocean Housing is a construction-focused landing page
                      designed to generate leads.
                    </p>
                    <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>UI & UX</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>HTML & CSS</p>
                      </div>
                      <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                        <p>TAILWIND CSS</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="https://ocean-landpg.netlify.app/"
                        className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                      >
                        <p>VISIT LANDING PAGE</p>
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                          alt="arrow-img"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
