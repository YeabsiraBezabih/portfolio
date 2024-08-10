import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section
      className="p-10 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-evenly items-center text-white">
        <div className="lg:w-2/3 text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl">
            I&apos;m <strong>Yeabsira Bezabih</strong>, a passionate Software Engineering student with a strong interest in web development. My journey into technology has been driven by curiosity and a desire to create meaningful digital experiences. I enjoy solving problems and designing user-friendly web applications. Whether it&apos;s front-end, back-end, or full-stack development, I am committed to continuously learning and pushing the boundaries of what&apos;s possible in tech.
          </p>
        </div>
        <div className="lg:w-1/3 text-left lg:text-center mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold mb-4">I&apos;M</h1>
          <ul className="text-lg">
            <li className="mb-4">
              <FaLightbulb className="inline-block text-yellow-500 mr-2" />
              Creative Problem Solver
            </li>
            <li className="mb-4">
              <FaLaptopCode className="inline-block text-green-500 mr-2" />
              Full-Stack Developer
            </li>
            <li className="mb-4">
              <FaCode className="inline-block text-purple-500 mr-2" />
              Continuous Learner
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-16 mb-0 text-2xl font-semibold text-black italic text-center">
        &quot;Achieve More with Less&quot;
      </p>
      <div className="mt-16 flex justify-center space-x-4">
        <a
          href="/about" // link to the About page
          className="inline-flex items-center bg-transparent border border-white text-white px-6 py-1 rounded-3xl text-lg font-medium hover:text-blue-400 transition duration-300"
        >
          See More
        </a>
      </div>
    </section>
  );
};


export default AboutMe;
