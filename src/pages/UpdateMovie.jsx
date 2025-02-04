import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const UpdateMovie = () => {
  const movie = useLoaderData()
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleUpdateMovie=(e)=>{
    e.preventDefault()
    const form = e.target;

    const poster = form.poster.value.trim();
    const title = form.title.value.trim();
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const rating = form.rating.value;
    const summary = form.summary.value.trim();

        // Validation
        const newErrors = {};

        // Validate Movie Poster (URL)
        if (!/^https?:\/\/.+/.test(poster)) {
          newErrors.poster = "Please provide a valid URL for the poster.";
        }
    
        // Validate Movie Title
        if (title.length < 2) {
          newErrors.title = "The movie title must be at least 2 characters long.";
        }
    
        // Validate Genre
        if (!genre) {
          newErrors.genre = "Please select a genre.";
        }
    
        // Validate Duration
        if (!duration || duration <= 60) {
          newErrors.duration = "Duration must be greater than 60 minutes.";
        }
    
        // Validate Release Year
        if (!releaseYear) {
          newErrors.releaseYear = "Please select a release year.";
        }
    
        // Validate Rating
        if (!rating || rating < 1 || rating > 5) {
          newErrors.rating = "Please provide a rating between 1 and 5.";
        }
    
        // Validate Summary
        if (summary.length < 10) {
          newErrors.summary = "The summary must be at least 10 characters long.";
        }
    
        // Update errors state
        setErrors(newErrors);
    
        // If no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
          const updateData = {
            poster,
            title,
            genre,
            duration,
            releaseYear,
            rating,
            summary,
          };
          fetch(`https://movie-portal-lilac.vercel.app/movie/${movie._id}`,{
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.modifiedCount > 0){
              toast.success("Movie Update successfully!");
              navigate(`/movie/${movie._id}`)
            }
            else {
              toast.error("Failed to update this movie.");
            }
          })
        }
  }

  useEffect(()=>{
    document.title = 'Update Movie || Movie Lover'
  }, [])
  return (
    <div className="rounded-lg shadow-lg my-7">
      <h2 className="text-3xl font-bold text-center mb-6">
      <Typewriter
                words={[
                  `Update ${movie.title} Movie`,
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
      </h2>
      <form onSubmit={handleUpdateMovie} className="w-11/12 mx-auto">
        {/* Movie Poster and title */}
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">
              Movie Poster (URL)
            </label>
            <input
            defaultValue={movie.poster}
              type="text"
              name="poster"
              className="w-full px-4 py-2 rounded-lg border-2"
              placeholder="Enter image URL"
            />
            {errors.poster && (
              <p className="text-red-500 text-sm mt-1">{errors.poster}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">Movie Title</label>
            <input
            defaultValue={movie.title}
              type="text"
              name="title"
              className="w-full px-4 py-2 rounded-lg  border-2"
              placeholder="Enter movie title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
        </div>

        {/* Genre and Duration */}
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">Genre</label>
            <select
              defaultValue={movie.genre}
              name="genre"
              className="w-full px-4 py-2 rounded-lg border-2"
            >
              <option value="">Select Genre</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="romantic">Romantic</option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">
              Duration (minutes)
            </label>
            <input
            defaultValue={movie.duration}
              type="number"
              name="duration"
              className="w-full px-4 py-2 rounded-lg border-2"
              placeholder="Enter duration in minutes"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
            )}
          </div>
        </div>

        {/* Release Year and Rating */}
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">Release Year</label>
            <select
              defaultValue={movie.releaseYear}
              name="releaseYear"
              className="w-full px-4 py-2 rounded-lg border-2"
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            {errors.releaseYear && (
              <p className="text-red-500 text-sm mt-1">{errors.releaseYear}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <label className="block text-lg font-medium mb-2">
              Rating (1 to 5)
            </label>
            <input
            defaultValue={movie.rating}
              type="number"
              name="rating"
              className="w-full px-4 py-2 rounded-lg border-2"
              placeholder="Enter a rating (1 to 5)"
              min="1"
              max="5"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
            )}
          </div>
        </div>

        {/* Summary */}
        <div>
          <label className="block text-lg font-medium mb-2">Summary</label>
          <textarea
          defaultValue={movie.summary}
            name="summary"
            className="w-full px-4 py-2 rounded-lg border-2"
            rows="4"
            placeholder="Write a short summary of the movie"
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            type="submit"
            value="Update Movie"
            className="px-6 py-3 btn font-bold rounded-lg my-5 bg-green-600 hover:bg-green-700 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateMovie;