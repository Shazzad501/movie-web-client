import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<section className="flex items-center justify-center bg-black text-white py-12 px-6">
      <div className="text-center space-y-6 max-w-lg">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60738.png" // Placeholder for film reel icon
              alt="Film Reel Icon"
              className="w-12"
            />
          </div>
        </div>
        {/* Title */}
        <h1 className="text-5xl font-bold">Hey viewer</h1>
        {/* Description */}
        <p className="text-lg leading-relaxed">
          Get the show on the road in the best way possible with Movie!
          Everything any movie maker & production studio may need. Action!
        </p>
        {/* Button */}
        <Link to='/add-movie' className="btn bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg shadow-md font-medium">
          Click me
        </Link>
      </div>
    </section>
  );
};

export default Footer;