import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <hr className="border-gray-700 mb-4" /> {/* Added horizontal line */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {/* Logo or Site Title */}
            <Link to="/" className="text-2xl font-bold">
              Yeabsira Bezabih
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yeabsirabezabih" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yeabsira-bezabih-a23082299" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com/yeabsirabezabih" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://facebook.com/yeabsira.bezabih7" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com/yeabsira_bezabih" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://tiktok.com/@yeabsira_bezabih" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition duration-300 delay-150 hover:text-blue-400">
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center space-x-6 mb-4">
          <Link to="/terms" className="transition duration-300 delay-150 hover:text-blue-400">Terms of Service</Link>
          <Link to="/privacy" className="transition duration-300 delay-150 hover:text-blue-400">Privacy Policy</Link>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Yeabsira Bezabih. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
