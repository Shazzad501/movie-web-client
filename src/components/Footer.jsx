import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center text-white rounded py-10 bg-black">
  <nav className="flex gap-4">
    <Link to='/' className="link link-hover font-bold text-lg">Home</Link>
    <Link to='/all-movie' className="link link-hover font-bold text-lg">Movies</Link>
    <Link to='' className="link link-hover font-bold text-lg">Upcoming</Link>
    <Link to='/login'className="link link-hover font-bold text-lg">Login</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link to='https://twitter.com/home' target='_blank' className='text-2xl font-semibold text-blue-900'>
        <FaTwitter></FaTwitter>
      </Link>
      <Link to='https://www.youtube.com/' target='_blank' className='text-2xl font-semibold text-red-700'>
        <FaYoutube></FaYoutube>
      </Link>
      <Link to='https://www.facebook.com/' target='_blank' className='text-2xl font-semibold text-blue-800'>
        <FaFacebook></FaFacebook>
      </Link>
    </div>
  </nav>
  <aside>
    <p className='font-bold text-base'>Copyright © {new Date().getFullYear()} - All right reserved by Maruf</p>
  </aside>
</footer>
  );
};

export default Footer;