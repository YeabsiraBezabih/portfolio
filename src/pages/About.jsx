import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import { FaUniversity, FaBriefcase, FaHiking, FaBook, FaUtensils, FaUser } from 'react-icons/fa';
import profile from '../assets/images/profile.png'; // Replace with the actual path to your photo

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const AboutIntro = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left Side: Black Background */}
      <div className="w-full md:w-1/3 bg-black p-6 md:p-10 flex flex-col items-center justify-center">
        {/* Profile Card */}
        <div className="bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-black p-4 md:p-6 rounded-lg shadow-lg w-full flex flex-col items-center md:ml-[50px] lg:ml-[200px] z-20">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-transparent overflow-hidden rounded-full">
            <img
              src={profile}
              alt="Yeabsira Bezabih"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h2 className="mt-4 text-xl md:text-2xl font-bold text-center">Yeabsira Bezabih</h2>
          <p className="text-lg md:text-3xl font-bold my-4 md:my-9 text-center">Web Developer</p>
          <div className="flex space-x-4 mt-4 text-black">
            <a href="https://www.linkedin.com/in/yeabsira-bezabih-a23082299" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl md:text-2xl transition duration-300 delay-150 hover:text-blue-400" />
            </a>
            <a href="https://github.com/yeabsirabezabih" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl md:text-2xl transition duration-300 delay-150 hover:text-blue-400" />
            </a>
            <a href="https://twitter.com/yeabsirabezabih" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl md:text-2xl transition duration-300 delay-150 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Blue Gradient Background */}
      <div className="w-full md:w-2/3 bg-gradient-to-l from-[#020024] via-[#090979] to-[#00d4ff] px-8 md:px-20 py-6 md:py-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-2 flex items-center text-center md:text-left">
          <FaUser className="mr-3 text-black" />
          About Me
        </h2>
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
          <p className="mt-4 p-4 text-sm md:text-base rounded-lg font-medium bg-black text-white">
            I&apos;m Yeabsira Bezabih, a dedicated Software Engineering student with a focus on web development. My
            passion for technology and problem-solving has driven me to learn and build projects from the ground up.
            Currently, I am honing my skills to become a proficient full-stack developer, ready to tackle complex
            challenges and contribute to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
const CombinedSection = () => {
  return (
    <section className="p-10 bg-black flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-stretch">
      {/* Education Card */}
      <div className="flex-1 bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-gray-300  font-bold flex items-center mb-4">
          <FaUniversity className="mr-2" />
          Education
        </h2>
        <p className="text-gray-300  mb-4">
          Bachelor of Science in Software Engineering from XYZ University (2020-2024).
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
          <li>Dean&apos;s List for academic excellence (2021-2023)</li>
          <li>Member of the University Coding Club</li>
        </ul>
      </div>

      {/* Experience Card */}
      <div className="flex-1 bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff]  rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-gray-300 font-bold flex items-center mb-4">
          <FaBriefcase className="mr-2" />
          Experience
        </h2>
        <p className="text-gray-300 mb-4">
          Software Engineering Intern at ABC Tech (Summer 2023)
        </p>
        <ul className="list-disc list-inside text-gray-300  space-y-2">
          <li>Developed web applications using React and Node.js</li>
          <li>Collaborated with a team of 5 engineers to enhance user interface components</li>
          <li>Automated testing and debugging processes, improving efficiency by 20%</li>
        </ul>
      </div>

      {/* Interests & Hobbies Card */}
      <div className="flex-1 bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-gray-300  font-bold flex items-center mb-4">
          <FaHiking className="mr-2" />
          Interests & Hobbies
        </h2>
        <p className="text-gray-300  mb-4">
          Beyond coding, I pursue various activities that keep me balanced and inspired:
        </p>
        <ul className="list-disc list-inside text-gray-300  space-y-2">
          <li className="flex items-center">
            <FaHiking className="text-black mr-2" />
            Hiking - Exploring nature and challenging myself on new trails
          </li>
          <li className="flex items-center">
            <FaBook className="text-black mr-2" />
            Reading - Diving into science fiction and tech literature
          </li>
          <li className="flex items-center">
            <FaUtensils className="text-black mr-2" />
            Cooking - Experimenting with new recipes and flavors
          </li>
        </ul>
      </div>
    </section>
  );
};
const CTASection = () => {
  return (
    <section className="p-10 text-center bg-black">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4 mb-5">Interested in working together or learning more? Contact me!</p>
      <Link to="/#contact"  
        className="bg-transparent border border-white text-white px-6 py-1 mt-2 rounded-3xl text-lg font-medium transition duration-300 delay-150 hover:text-blue-400 "
      >
        Contact Me
      </Link>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutIntro />
      <CombinedSection/>
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
