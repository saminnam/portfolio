import codingmp4 from "../assets/coding.mp4";
import logo1 from "../assets/html-logo.webp";
import logo2 from "../assets/css-logo.webp";
import logo3 from "../assets/js-logo.png";
import logo4 from "../assets/react-logo.webp";
import logo5 from "../assets/bootstrap-logo.png";
import logo6 from "../assets/tailwind-logo.png";
import logo7 from "../assets/grid-logo.png";
import logo8 from "../assets/redux-logo.svg";

const Skills = () => {
  return (
    <section id="skills">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2
          className="text-center text-3xl font-bold md:text-5xl font-serif"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          Skills
        </h2>
        <p className="msm:text-base mb-8 mt-4 text-center text-sm text-gray-500 md:mb-12 lg:mb-16 font-serif">
          Maintaining best professional skills forever.
        </p>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Video */}
          <div className="h-full w-full">
            <video
              src={codingmp4}
              className="mx-auto inline-block lg:h-[940px] rounded-lg h-full w-full max-w-2xl object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
          {/* List */}
          <ul className="grid max-w-2xl md:grid-rows-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-5 lg:max-w-none">
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo1}
                alt="htmllogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">HTML 5</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in HTML and the ability to handle
                highly critical content structures easily.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo2}
                alt="csslogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">CSS 3</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in CSS and the ability to handle
                all types of styles with the animations efficiently for
                responsive design.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo3}
                alt="javascriptlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">JAVASCRIPT</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in JavaScript and have been using
                main concepts in many projects.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo4}
                alt="reactlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">REACT JS</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in React Js and have been using
                hooks concepts in many projects.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo5}
                alt="bootstraplogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">BOOTSTRAP</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in Bootstrap and the ability to
                handle Bootstrap classes efficiently for responsive design.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo6}
                alt="tailwindlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">TAILWIND</p>
              <p className="text-sm text-gray-500">
                I have 1+ years of experience in Tailwind and the ability to
                handle Tailwind classes efficiently for responsive design.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo7}
                alt="ag-grid"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">AG-GRID</p>
              <p className="text-sm text-gray-500">
                I have build some dashboard's for client's using AG-GRID.
              </p>
            </li>
            <li className="flex flex-col p-5 education_card" data-aos="fade-up">
              <img
                src={logo8}
                alt="reduxlogo"
                className="mb-4 object-cover inline-block h-10 w-10 rounded-full"
              />
              <p className="mb-4 font-semibold">REDUX</p>
              <p className="text-sm text-gray-500">
              I have 1+ years of experience in Redux state management.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
