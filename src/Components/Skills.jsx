import React from "react";
import codingmp4 from "../assets/coding.mp4";

const Skills = () => {
  return (
    <section id="skills">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-5xl font-serif">
          Skills
        </h2>
        {/* <div className="w-[100px] mt-1 h-[5px] up-[550px] top-[200px] absolute bg-[#2cd5ef] rounded"></div> */}
        <p className="msm:text-base mb-8 mt-4 text-center text-sm text-gray-500 md:mb-12 lg:mb-16 font-serif">
          Maintaining best professional skills forever.
        </p>
        {/* Component */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          
          {/* Video */}
          <div className="h-full w-full">
            <video
              src={codingmp4}
              className="mx-auto inline-block lg:h-[680px] rounded-lg h-full w-full max-w-2xl object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
          {/* List */}
          <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                alt="htmllogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">HTML 5</p>
              <p className="text-sm text-gray-500">
              I have 1.5 years of experience in HTML and the ability to handle highly critical content structures easily.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                alt="csslogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">CSS 3</p>
              <p className="text-sm text-gray-500">
                I have 1.5 years of experience in CSS and the ability to handle
                all types of styles with the animations efficiently for responsive design.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://th.bing.com/th/id/OIP.6eJAwKYo65W5WIqe3MQl6wHaHa?rs=1&pid=ImgDetMain"
                alt="javascriptlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">JAVASCRIPT</p>
              <p className="text-sm text-gray-500">
              I have 6 months of experience in JavaScript and have been using main concepts in many projects.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
                alt="reactlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">REACT JS</p>
              <p className="text-sm text-gray-500">
              I have 6 months of experience in React Js and have been using hooks concepts in many projects.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
                alt="bootstraplogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">BOOTSTRAP</p>
              <p className="text-sm text-gray-500">
              I have 6 months of experience in Bootstrap and the ability to handle Bootstrap classes efficiently for responsive design.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
                alt="tailwindlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">TAILWIND</p>
              <p className="text-sm text-gray-500">
              I have 6 months of experience in Tailwind and the ability to handle Tailwind classes efficiently for responsive design.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
