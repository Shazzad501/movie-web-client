import React from 'react';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <section>
        <About></About>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Home;