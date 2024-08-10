import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  // Add other icons as needed
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faChartBar,  } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')  // Update the path if necessary
      .then(response => response.json())
      .then(data => setProjects(data.projects));
  }, []);

  return (
   
<section className="p-10">
  <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {projects.map((project) => (
      <Link
        key={project.id}
        to={`/projects/${project.id}`}
        className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-t from-[#020024] via-[#090979] to-[#00d4ff]"
       
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-black font-bold text-sm">{project.description}</p>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block text-sm"
          >
            View Demo
          </a>
          <div className="mt-2 text-black font-semibold text-xs">
            <p><strong>Tech Stack:</strong></p>
            <div className="flex space-x-4 text-2xl"> {/* Larger icons */}
              {project.techStack.includes('React') && (
                <FontAwesomeIcon icon={faReact} className="text-blue-500" />
              )}
              {project.techStack.includes('Vite') && (
                <FontAwesomeIcon icon={faJsSquare} className="text-yellow-500" />
              )}
              {project.techStack.includes('Tailwind CSS') && (
                <FontAwesomeIcon icon={faCss3Alt} className="text-blue-600" />
              )}
              {project.techStack.includes('Font Awesome') && (
                <FontAwesomeIcon icon={faHtml5} className="text-orange-600" />
              )}
              {project.techStack.includes('Node.js') && (
                <FontAwesomeIcon icon={faNodeJs} className="text-green-500" />
              )}
              {project.techStack.includes('Express') && (
                <FontAwesomeIcon icon={faDatabase} className="text-gray-500" />
              )}
              {project.techStack.includes('MongoDB') && (
                <FontAwesomeIcon icon={faDatabase} className="text-green-600" />
              )}
              {project.techStack.includes('Redux') && (
                <FontAwesomeIcon icon={faChartBar} className="text-purple-600" />
              )}
              {/* Add more icons as needed */}
            </div>
            <p className="mt-2 text-gray-400 font-base"><strong>Details:</strong> {project.details}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  <div className="mt-16 flex justify-center space-x-4">
        <a
          href="/projects" // link to the About page
          className="inline-flex items-center bg-transparent border border-white text-white px-6 py-1 rounded-3xl text-lg font-medium hover:text-blue-400 transition duration-300"
        >
          See More
        </a>
      </div>
</section>
  );
};

export default Projects;
