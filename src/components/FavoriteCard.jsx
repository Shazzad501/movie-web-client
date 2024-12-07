import React, { useEffect } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const FavoriteCard = ({movie, setMoviesData}) => {

  // handle favorite movie delete
  const handleFavoriteMovieDel = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-portal-lilac.vercel.app/favorites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The movie has been deleted.", "success");
              setMoviesData((prevMovies) =>
                prevMovies.filter((movie) => movie._id !== id)
              );
            } else {
              toast.error("Failed to delete the movie.");
            }
          })
          .catch((error) => {
            toast.error("Something went wrong!",error);
          });
      }
    });
  }

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (

    <div data-aos='fade-down' className="card bg-base-100 shadow-xl border border-gray-200 rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden rounded-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold">
          {movie.title}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Duration:</span> {movie.duration} min
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Release Year:</span> {movie.releaseYear}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700">Rating:</span>
          <p>
          <Rating
            initialRating={parseFloat(movie.rating)}
            emptySymbol={<FaRegStar className="text-gray-500 text-lg" />}
            fullSymbol={<FaStar className="text-yellow-500 text-lg" />}
            readonly
          />
          </p>
        </div>
        <div className="card-actions mt-5"> 
          <Link onClick={()=>handleFavoriteMovieDel(movie._id)} className="btn w-full bg-red-400 hover:bg-red-400 text-white">
          <span className="font-bold text-xl"><FaDeleteLeft></FaDeleteLeft></span> Delete
        </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
