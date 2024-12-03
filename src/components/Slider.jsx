import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Slider = () => {
  useEffect(()=>{
    // aos animation
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <div className="">
      <div className="carousel w-full py-8">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src='https://i.ibb.co.com/c2xPNk6/till-movie.jpg'
            alt="Mountain Trek"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
            <p data-aos="fade-left" className="mb-4 font-bold text-lg">           
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. <br className='hidden md:block' /> They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories,<br className='hidden md:block' /> and experiences we might never encounter otherwise
            </p>
            <div data-aos="fade-up">
            <a
              href='#main-section'
              className="btn bg-transparent font-bold text-base text-white hover:bg-red-400 border-2 border-red-400"
            >
              View More
            </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden  md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide3" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/4RRXZxT/thor-ironman.webp"
            alt="Forest Expedition"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
          <p data-aos="fade-left" className="mb-4 font-bold text-lg">           
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. <br className='hidden md:block' /> They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories,<br className='hidden md:block' /> and experiences we might never encounter otherwise
            </p>
          <div data-aos="fade-up">
          <a
              href='#main-section'
              className="btn bg-transparent font-bold text-base text-white hover:bg-red-400 border-2 border-red-400"
            >
              View More
            </a>
          </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide1" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/jR48Trb/The-Batman.webp"
            alt="Desert Exploration"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
          <p data-aos="fade-left" className="mb-4 font-bold text-lg">           
              Movies have a unique ability to transport us to different worlds, stir emotions, and evoke memories. <br className='hidden md:block' /> They are a reflection of our lives, dreams, and fantasies, offering a window into cultures, stories,<br className='hidden md:block' /> and experiences we might never encounter otherwise
            </p>
            <div data-aos="fade-up">
            <a
              href='#main-section'
              className="btn bg-transparent font-bold text-base text-white hover:bg-red-400 border-2 border-red-400"
            >
              View More
            </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute hidden  md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide2" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
