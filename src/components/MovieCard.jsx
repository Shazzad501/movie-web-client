import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const MovieCard = ({movie}) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden rounded-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold text-gray-800">
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
          <button className="btn w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
