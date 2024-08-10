import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectStyle.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProjects(data.projects));
  }, []);

  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom ? carouselDom.querySelector('.carousel .list') : null;
    const thumbnailBorderDom = carouselDom ? carouselDom.querySelector('.carousel .thumbnail') : null;

    if (!carouselDom || !SliderDom || !thumbnailBorderDom) return;

    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.carousel .thumbnail .item');
  
      if (SliderItemsDom.length === 0 || thumbnailItemsDom.length === 0) return;

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    let runTimeOut;
    let runNextAuto = setTimeout(() => nextDom.click(), timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, [projects]);

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
        <h2 className="text-3xl text-center  font-bold mt-2 pt-2 text-black">Projects</h2>
        <div className="carousel">
          {/* list item */}
          <div className="list">
            {projects.map(project => (
              <div key={project.id} className="item">
                <img src={project.image} alt={project.title} />
                <div className="content">
                  <div className="author">{project.author}</div>
                  <div className="title">{project.title}</div>
                  <div className="topic">{project.topic}</div>
                  <div className="des">{project.description}</div>
                  <div className="buttons">
                    <Link to={`/projects/${project.id}`}>
                      <button>SEE MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* list thumbnail */}
          <div className="thumbnail">
            {projects.map(project => (
              <div key={project.id} className="item">
                <img src={project.image} alt={project.title} />
                <div className="content">
                  <div className="title">{project.title}</div>
                  <div className="description">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
          {/* next prev */}
          <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          {/* time running */}
          <div className="time"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
