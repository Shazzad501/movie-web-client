import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="">
      <div className="carousel w-full py-8">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/c2xPNk6/till-movie.jpg"
            alt="Slide 1"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center text-center text-white p-6 rounded-lg">
            <p
              data-aos="fade-left"
              className="mb-4 font-semibold text-lg md:text-xl max-w-2xl leading-relaxed">
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories, and experiences we might never encounter otherwise.
            </p>
            <div data-aos="fade-up">
              <a
                href="#main-section"
                className="btn bg-transparent text-base font-semibold text-white hover:bg-red-500 border-2 border-red-500 transition-all duration-300 px-6 py-2 rounded-full shadow-lg">
                View More
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/4RRXZxT/thor-ironman.webp"
            alt="Slide 2"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center text-center text-white p-6 rounded-lg">
            <p
              data-aos="fade-left"
              className="mb-4 font-semibold text-lg md:text-xl max-w-2xl leading-relaxed">
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories, and experiences we might never encounter otherwise.
            </p>
            <div data-aos="fade-up">
              <a
                href="#main-section"
                className="btn bg-transparent text-base font-semibold text-white hover:bg-red-500 border-2 border-red-500 transition-all duration-300 px-6 py-2 rounded-full shadow-lg">
                View More
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/jR48Trb/The-Batman.webp"
            alt="Slide 3"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center text-center text-white p-6 rounded-lg">
            <p
              data-aos="fade-left"
              className="mb-4 font-semibold text-lg md:text-xl max-w-2xl leading-relaxed">
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories, and experiences we might never encounter otherwise.
            </p>
            <div data-aos="fade-up">
              <a
                href="#main-section"
                className="btn bg-transparent text-base font-semibold text-white hover:bg-red-500 border-2 border-red-500 transition-all duration-300 px-6 py-2 rounded-full shadow-lg">
                View More
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
