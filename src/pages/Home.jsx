import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';
import About from '../components/About';
import Exparience from '../components/Exparience';

const Home = () => {
  useEffect(()=>{
    document.title = "Movie Lover"
  }, [])
  return (
    <div>
      <Slider></Slider>
      <section>
        <About></About>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section>
        <Exparience></Exparience>
      </section>
    </div>
  );
};

export default Home;