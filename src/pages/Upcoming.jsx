import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import UpcomingCard from '../components/UpcomingCard';

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    document.title = "Upcoming Movies || Movie Lover"

    fetch('./upcoming.json')
    .then(res=> res.json())
    .then(data=> {
      setMovies(data);
    })
  }, [setMovies])
  return (
    <div className='py-10'> 
      <div className='text-center'>
      <h2 className="font-bold text-2xl text-center ">
          <Typewriter
                words={[
                  "Upcoming Blockbusters of 2025: A Year of Epic Adventures and Thrilling Stories",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
      </h2>
      <p className='font-bold text-base mt-3'>
      The year 2025 is set to bring an exciting lineup of movies across various genres, catering to all audiences</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {
          movies.map(movie => <UpcomingCard key={movie.id} movie={movie}></UpcomingCard>)
        }
      </div>
    </div>
  );
};

export default Upcoming;