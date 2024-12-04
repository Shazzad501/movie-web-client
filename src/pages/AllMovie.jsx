import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const AllMovie = () => {
  const moviesData = useLoaderData()
  // const {movies, setMovies} = useState(moviesData)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
      {
        moviesData.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
      }
    </div>
  );
};

export default AllMovie;