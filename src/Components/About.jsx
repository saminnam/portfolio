import cv from "../assets/cv.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-8 lg:w-3/5">
            <h2
              className="text-3xl font-bold md:text-5xl font-serif"
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              About us
            </h2>
            <div className="w-[140px] h-[5px] bg-blue-600 rounded"></div>
            <p className="text-sm sm:text-base font-serif">
              As a professional Web Developer, I specialize in transforming
              designs into high-performance, responsive, and interactive web
              applications using HTML, CSS, JavaScript, and React.js. With a
              strong foundation in front-end development, I ensure seamless user
              experiences and optimized performance. Additionally, my expertise
              in UI/UX design, combined with tools like Figma,
              allows me to create visually appealing and user-friendly
              interfaces. My focus is on building scalable, efficient, and
              engaging digital experiences.
            </p>
            <a
              href={cv}
              className="btn_download w-48 rounded-md px-4 py-3 text-center font-semibold"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
              <span className="button__text">Download CV</span>
            </a>
            <div className="my-8 h-px w-full bg-black"></div>
            <div className="grid gap-8 md:grid-cols-3 md:gap-4">
              <div
                className="flex flex-col gap-4 relative overflow-hidden bg-white education_card h-auto rounded-md border border-solid p-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute inset-0 -z-20 bg-[url('./assets/bg-img1.avif')] bg-cover bg-no-repeat"></div>
                <h4 className="font-bold font-serif">Qualification</h4>
                <p className="text-sm font-serif text-justify">
                  I have Graduated in <b>B.Com</b> (Commerce) on 2023 and{" "}
                  <b>B.A</b> (Arabic) on 2024 both at University Of Madras. And
                  I have scored <b>70%</b> on both UG's.
                </p>
              </div>
              <div
                className="flex flex-col gap-4 relative overflow-hidden bg-white education_card h-auto rounded-md border border-solid p-6 md:p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute inset-0 -z-20 bg-[url('./assets/bg-img1.avif')] bg-cover bg-no-repeat"></div>
                <h4 className="font-bold font-serif">Certification</h4>
                <p className="text-sm font-serif text-justify">
                  I have certified in Full-Stack Development for 6 months
                  full-time course at Tambaram <b>Adventure Learning</b>. (Year
                  - 2024). And also certified in DCA at <b>Udemy</b>
                </p>
              </div>
              <div
                className="flex flex-col gap-4 relative overflow-hidden bg-white education_card h-auto rounded-md border border-solid p-6 md:p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute inset-0 -z-20 bg-[url('./assets/bg-img1.avif')] bg-cover bg-no-repeat"></div>
                <h4 className="font-bold font-serif">Experience</h4>
                <p className="text-sm font-serif">
                  Front-End Developer with 1+ years of experience, formerly at{" "}
                  <a href="https://www.adventuretechnologysolutions.com/">
                    <b>Adventure Technologies</b>
                  </a>{" "}
                  (2024-2025), now at{" "}
                  <a href="https://digitalmantraaz.com/">
                    <b>Digital Mantraaz</b>
                  </a>{" "}
                  (2025).
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5">
            <img
              src="https://www.karbec.com.au/wp-content/uploads/2018/05/managed_services.jpg"
              className="w-[100%] h-full"
              loading="lazy"
              alt="laptop"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
