import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import toast from 'react-hot-toast';


const FavoriteMovie = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Favorite || Movie Lover";

    if (user?.email) {
      fetch(`http://localhost:5000/favorites/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMoviesData(data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error('Error fetching movies');
          setLoading(false);
        });
    }
  }, [user?.email]);


  if (loading) {
    return <Loading />;
  }

  if (moviesData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">
          No movies available. Please add a movie to the favorite list.
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

export default FavoriteMovie;
