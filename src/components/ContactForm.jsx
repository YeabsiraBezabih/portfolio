import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaUser, FaMailBulk, FaComments } from 'react-icons/fa';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvgpapjp");

  if (state.succeeded) {
    return (
      <section className="p-10 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <p className="text-xl font-semibold">Thanks for getting in touch! We&apos;ll get back to you soon.</p>
        </div>
        <div className="w-full md:w-1/3 md:ml-10 flex flex-col items-center">
          <h2 className="text-2xl mb-4 font-bold">Contact Details</h2>
          <ul className="space-y-4 text-center">
            <li className="flex items-center justify-center space-x-2">
              <FaGithub className="text-2xl text-gray-700" />
              <a href="https://github.com/yourusername" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-2xl text-gray-700" />
              <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">Email</a>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <FaMapMarkerAlt className="text-2xl text-gray-700" />
              <span>Your City, Your Country</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="p-10 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 mb-8 md:mb-0 p-10 bg-gradient-to-t from-[#020024] via-[#090979] to-[#00d4ff] rounded-lg"
        >
        <h2 className="text-3xl mb-4 font-bold text-black">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-11 transform -translate-y-1/5 text-black text-xl" />
            <label className="block mb-2 text-black text-xl font-medium pl-10" htmlFor="name">Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="relative mb-4">
            <FaMailBulk className="absolute left-3 top-12 transform -translate-y-1/5 text-black text-xl" />
            <label className="block mb-2 text-black text-xl font-medium pl-10" htmlFor="email">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              type="email"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="relative mb-4">
            <FaComments className="absolute left-3 top-12 transform -translate-y-1/4 text-black text-2xl" />
            <label className="block mb-2 text-black text-xl font-medium pl-10" htmlFor="message">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-3xl text-l font-medium hover:text-blue-400 transition duration-300"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/3 md:ml-10 flex flex-col items-center">
        <h2 className="text-2xl mb-4 font-bold">Contact Details</h2>
        <ul className="space-y-4 text-center">
          <li className="flex items-center justify-center space-x-2">
            <FaGithub className="text-2xl text-gray-700" />
            <a href="https://github.com/YeabsiraBezabih" className="transition duration-300 delay-150 hover:text-blue-400" target="_blank" rel="noopener noreferrer">YeabsiraBezabih</a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaEnvelope className="text-2xl text-gray-700" />
            <a href="mailto:yeabsirabezabih791@gmail.com" className="transition duration-300 delay-150 hover:text-blue-400">YeabsiraBezabih791@gmail.com</a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-2xl text-gray-700" />
            <span>Addis Ababa , Ethiopia</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactForm;
