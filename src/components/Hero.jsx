import './Hero.css'; // Import the custom CSS file
import profilePhoto from '../assets/images/profile.png'; // Make sure to add the correct path to your image
import Typed from 'typed.js'; // Import Typed.js for the typing effect
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

const Hero = () => {
  const typedElement1 = useRef(null);
  const typedElement2 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Software Engineer", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 1000,
      loop: true,
      showCursor: false,
    };

    const typed1 = new Typed(typedElement1.current, options);
    const typed2 = new Typed(typedElement2.current, options);

    const syncTyped = () => {
      typed2.start(); // Manually start the second Typed instance
    };

    typed1.options.onStringTyped = syncTyped;

    return () => {
      typed1.destroy(); // Cleanup the Typed instance
      typed2.destroy(); // Cleanup the Typed instance
    };
  }, []);

  return (
    <section className="hero bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
      {/* Marquee Section */}
      <div className="marquee">
        <div className="marquee__inner" aria-hidden="true">
          <span className="greeting">Hello</span>
          <span className="greeting">Hola</span>
          <span className="greeting">Bonjour</span>
          <span className="greeting">Ciao</span>
          <span className="greeting">こんにちは</span>
          <span className="greeting">안녕하세요</span>
          <span className="greeting">Hello</span>
          <span className="greeting">Hola</span>
          <span className="greeting">Bonjour</span>
          <span className="greeting">Ciao</span>
          <span className="greeting">こんにちは</span>
          <span className="greeting">안녕하세요</span>
          <span className="greeting">Hello</span>
          <span className="greeting">Hola</span>
          <span className="greeting">Bonjour</span>
          <span className="greeting">Ciao</span>
          <span className="greeting">こんにちは</span>
          <span className="greeting">안녕하세요</span>
        </div>
      </div>

      {/* Centered Profile Photo */}
      <div className="hero-photo-container">
        <img src={profilePhoto} alt="Profile" className="hero-photo" />
      </div>

      {/* Web Developer Text */}
      <div className="typed-container">
        <div ref={typedElement1} className="typed-text stroked-text"></div>
        <div ref={typedElement2} className="typed-text filled-text"></div>
      </div>

     

      {/* Buttons */}
      <div className="hero-buttons">
        <Link className="hero-button" to='/projects'>View My Work</Link>
        <Link className="hero-button" to='/#contact'>Get in Touch</Link>
      </div>

      {/* Background Logo */}
      <div className="hero-bg-logo"></div>
    </section>
  );
};

export default Hero;
