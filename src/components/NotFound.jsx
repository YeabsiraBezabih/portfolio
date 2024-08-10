import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen pt-0 bg-gray-100 text-center relative">
      {/* Exclamation Icon */}
      <FaExclamationTriangle className="absolute top-24 text-red-500 text-7xl" />

      <div className="max-w-lg w-full">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Oops! Page Not Found</p>
        <p className="text-lg text-gray-500 mt-4">
          It seems the page you are looking for does not exist or has been moved. Please return to the homepage.
        </p>
        <div className="mt-8 text-xl">
          <Link to="/" className="text-blue-500 hover:underline flex items-center justify-center">
            <FaHome className="mr-2 text-black" /> Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
