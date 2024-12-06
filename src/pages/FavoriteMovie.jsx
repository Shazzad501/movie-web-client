import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';
import FavoriteCard from '../components/FavoriteCard';


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
    <div className='flex flex-col gap-6'>
      <div className='text-center'>
      <h2 className='font-bold text-3xl'>Hey!! {user?.displayName} this is your all favorite movie</h2>
      <p className='font-bold text-base mt-3'>Favorites are a personal collection of movies that hold a special place in our hearts. They represent films <br className='hidden lg:block' /> that resonate deeply, evoke emotions, or provide unforgettable entertainment. Adding a movie to your favorites is like bookmarking <br className='hidden lg:block' /> a cherished memory, ensuring it’s always within reach for a rewatch or recommendation. </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {moviesData.map((movie) => (
        <FavoriteCard key={movie._id} movie={movie} setMoviesData={setMoviesData} />
      ))}
    </div>
    </div>
  );
};

export default FavoriteMovie;
