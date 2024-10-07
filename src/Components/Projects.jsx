import React, { useState } from "react";
import hostel from "../assets/hostel.png";
import food_order from "../assets/food_order.png";
import e_commerce from "../assets/e_commerce.png";
import todo from "../assets/todo.png";
import keyan from "../assets/keyan.png";
import info from "../assets/info.png";

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
            <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl font-serif">
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
                    ? "bg-blue-950 text-white"
                    : "text-gray-500"
                }`}
              >
                Own Project's
              </div>
              <div
                onClick={() => setActive("Company Portfolios")}
                className={`relative rounded-lg px-5 py-2 transition-all duration-2000 ${
                  active === "Company Portfolios"
                    ? "bg-blue-950 text-white"
                    : "text-gray-500"
                }`}
              >
                Client's Project's
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {active === "Own Portfolios" && (
              <>
                {/* Own Portfolios Items */}
                <a
                  href="https://innam-todo.netlify.app"
                  className="flex max-w-full flex-col gap-4 px-4 md:px-2 "
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <img
                    alt="Blog image"
                    src={todo}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">Todo-List</p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed a Todo List application with features to add new
                      tasks, update existing tasks, and delete tasks.
                    </p>
                  </div>
                </a>
                <a
                  href="https://kaleidoscopic-sunburst-75d43c.netlify.app"
                  className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <img
                    alt="Blog image"
                    src={food_order}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">
                        Food-Order
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed a Food-Order website that allows users to browse
                      products, add items to the cart, and view the cart. The
                      cart page displays the individual prices of products along
                      with the total amount for all items in the cart.
                    </p>
                  </div>
                </a>
                <a
                  href="https://innam-e-commerce.netlify.app"
                  className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <img
                    alt="Blog image"
                    src={e_commerce}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">
                        E-Commerce
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed an E-commerce website featuring product
                      displays, accessible after user login. The platform
                      provides a secure login system, allowing customers to view
                      and purchase products once authenticated.
                    </p>
                  </div>
                </a>
              </>
            )}

            {active === "Company Portfolios" && (
              <>
                {/* Company Portfolios Items */}
                <a
                  href="https://brindhavanam-hostel.netlify.app"
                  className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <img
                    alt="Blog image"
                    src={hostel}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">
                        Hostel-Website
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed a website to display hostels with their
                      locations and listed features. Users can book hostel rooms
                      through the booking form provided.
                    </p>
                  </div>
                </a>
                <a
                  href="https://keyantechnologies.netlify.app"
                  className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <img
                    alt="Blog image"
                    src={keyan}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">
                        Keyan Technologies
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed a website for Keyan Technologies to showcase its
                      features, services, and portfolio, enabling efficient
                      management of client projects. The site serves as a
                      comprehensive platform for presenting Keyan's capabilities
                      and project highlights.
                    </p>
                  </div>
                </a>
                <a
                  href="https://inamtech.netlify.app"
                  className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <img
                    alt="Blog image"
                    src={info}
                    className="inline-block h-60 w-full rounded-lg object-cover"
                  />
                  <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                        <p>React Js</p>
                      </div>
                      <p className="text-lg font-bold md:text-2xl">Info Tech</p>
                    </div>
                    <p className="text-sm text-gray-500 max-w-72 text-justify">
                      Developed a website for Innam Info Technologies to
                      showcase its features, services, and portfolio, enabling
                      efficient management of client projects. The site serves
                      as a comprehensive platform for presenting Innam's
                      capabilities and project highlights.
                    </p>
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
