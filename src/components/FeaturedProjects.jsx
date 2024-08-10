
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project demonstrates my skills in React and web development.',
    link: 'https://github.com/YeabsiraBezabih/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project highlights my work with API integration and data visualization.',
    link: 'https://github.com/YeabsiraBezabih/project-two'
  }
  // Add more projects as needed
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
