import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const FeaturedMovie = () => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/featured-movies')
    .then(res=> res.json())
    .then(data=>{
      setMovies(data);
    })
  }, [])
  return (
    <div className="mt-6">
      <div className="flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-bold mb-3">Featured Movies</h2>
      <p className="font-semibold text-base mb-6">Discover the best of cinema with our curated selection of featured movies! <br className="hidden md:block" /> These are the highest-rated films, handpicked based on their exceptional storytelling, direction, and performances.Whether you're in<br className="hidden md:block" /> the mood for an action-packed adventure, a heartwarming drama.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
          movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedMovie;