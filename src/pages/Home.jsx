import React from 'react';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Home;