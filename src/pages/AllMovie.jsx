import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';
import { Typewriter } from 'react-simple-typewriter';

const AllMovie = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // daynamic title 
    document.title = "Movies || Movie Lover"
    fetch('https://movie-portal-lilac.vercel.app/movie')
      .then((res) => res.json())
      .then((data) => {
        setMoviesData(data);
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (query === '') {
      setFilteredMovies(moviesData);
    } else {
      const results = moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(query)
      );
      setFilteredMovies(results);
    }
  };

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
    <div>
      <div className="flex flex-col gap-5 items-center justify-center py-10">
        <h2 className="font-bold text-2xl text-center">
        <Typewriter
                words={[
                  "Hey viewer, search your movie by title.",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
        </h2>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSearch}>
            <div>
              <input
                type="search"
                name="search"
                placeholder="Enter title name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-2 border-red-400 rounded-md rounded-r-none border-r-0 px-2 py-2.5 focus:border-2 focus:border-red-400"
              />
              <input
                type="submit"
                value="Search"
                className="btn border-2 hover:border-red-400 border-red-400 rounded-l-none hover:bg-red-400 bg-red-400 text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg font-semibold text-gray-700">
            No movies found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
