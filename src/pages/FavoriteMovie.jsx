import React, { useEffect } from 'react';

const FavoriteMovie = () => {
  useEffect(()=>{
    document.title = "Favorite || Movie Lover"
  }, [])
  return (
    <div>
      Favorite Movie
    </div>
  );
};

export default FavoriteMovie;