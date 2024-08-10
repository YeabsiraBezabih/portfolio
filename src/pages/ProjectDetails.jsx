import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';

const techIcons = {
  React: <FaReact className="text-blue-500 text-3xl" />,
  'Node.js': <FaNodeJs className="text-green-500 text-3xl" />,
  JavaScript: <FaJsSquare className="text-yellow-500 text-3xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-blue-400 text-3xl" />,
  'Font Awesome': <FaHtml5 className="text-orange-600 text-3xl" />, // Example for Font Awesome
  Express: <SiExpress className="text-gray-600 text-3xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-3xl" />,
  Redux: <SiRedux className="text purple-600 text-3xl" />,
  HTML: <FaHtml5 className="text-orange-600 text-3xl" />,
  CSS: <FaCss3Alt className="text-blue-600 text-3xl" />
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedProject = data.projects.find(proj => proj.id === parseInt(id));
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="p-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-t from-[#020024] via-[#090979] to-[#00d4ff]"
        
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="mb-6">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${project.demo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg mb-4">{project.details}</p>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Tech Stack</h3>
            <div className="flex space-x-4">
              {project.techStack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {techIcons[tech] || <span className="text-white text-3xl">{tech}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 ">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white transition duration-300 delay-150 hover:text-blue-400"
            >
              <FaExternalLinkAlt className="mr-2" />
              View Live Demo
            </a>
            <a
              href={`https://github.com/yourusername/${project.title.toLowerCase().replace(/ /g, '-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white transition duration-300 delay-150 hover:text-blue-400 "
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
