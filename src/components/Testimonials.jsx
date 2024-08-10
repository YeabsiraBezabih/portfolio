import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonials));
  }, []);

  return (
    <section className="p-10 bg-black"
    >
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6  shadow-lg rounded-lg flex flex-col items-center text-center bg-gradient-to-t from-[#020024] via-[#090979] to-[#00d4ff]"
            >
              <p className="text-lg text-black italic mb-4">{testimonial.quote}</p>
              <h4 className="text-xl text-gray-400 font-semibold">- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
