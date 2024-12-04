import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link to='https://twitter.com/home' target='_blank' className='text-2xl font-bold'>
        <FaTwitter></FaTwitter>
      </Link>
      <Link to='https://www.youtube.com/' target='_blank' className='text-2xl font-bold'>
        <FaYoutube></FaYoutube>
      </Link>
      <Link to='https://www.facebook.com/' target='_blank' className='text-2xl font-bold'>
        <FaFacebook></FaFacebook>
      </Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Maruf</p>
  </aside>
</footer>
  );
};

export default Footer;