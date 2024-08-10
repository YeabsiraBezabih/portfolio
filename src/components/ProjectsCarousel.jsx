import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <section className="carousel">
      <div className="list">
        {projects.map((project, index) => (
          <div key={project.id} className={`item ${index === 0 ? 'active' : ''}`}>
            <img src={project.image} alt={project.title} />
            <div className="content">
              <div className="author">{project.author}</div>
              <div className="title">{project.title}</div>
              <div className="topic">{project.topic}</div>
              <div className="des">{project.description}</div>
              <div className="buttons">
                <button onClick={() => window.open(project.demo, '_blank')}>SEE DEMO</button>
                <Link to={`/projects/${project.id}`} className="text-blue-500 mt-2 inline-block">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Thumbnail and arrows */}
      <div className="thumbnail">
        {projects.map((project, index) => (
          <div key={index} className="item">
            <img src={project.thumbnail} alt={project.title} />
            <div className="content">
              <div className="title">{project.title}</div>
              <div className="description">{project.shortDescription}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev">{"<"}</button>
        <button id="next">{">"}</button>
      </div>
      <div className="time"></div>
    </section>
  );
};

export default ProjectsCarousel;
