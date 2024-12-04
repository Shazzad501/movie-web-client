import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

const AllMovie = () => {
  const [loading, setLoading] = useState(true); 
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movie')
      .then((res) => res.json())
      .then((data) => {
        setMoviesData(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <Loading />; 
  }

  if (moviesData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">
          No movies available. Please try again later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {moviesData.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMovie;
