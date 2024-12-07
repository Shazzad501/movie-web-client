import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const UpcomingCard = ({movie}) => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div data-aos='fade-down' className="card bg-base-100 shadow-xl border border-gray-200 rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden rounded-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold">
          {movie.title}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Duration:</span> {movie.duration} min
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Release Year:</span> {movie.releaseYear}
        </p>
        
        <div className="card-actions mt-5"> 
        
            <button onClick={()=>toast.error('No action! View card only.')} className="btn w-full bg-red-400 hover:bg-red-400 text-white">
          View only
          </button>

        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;