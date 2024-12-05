import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  console.log(user)

  const handleDelete = () => {
    // if(user?.email === movie?.userEmail){
    // }
    // else{
    //   toast.error("You aren't creator this movie. So you can't delete this!!")
    // }
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
          fetch(`http://localhost:5000/movie/${movie._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "The movie has been deleted.", "success");
                navigate("/all-movies");
              } else {
                toast.error("Failed to delete the movie.");
              }
            })
            .catch((error) => {
              toast.error("Something went wrong!");
            });
        }
      });   
  };

  const handleAddToFavorites = () => {
    const favoriteData = {
      userEmail: movie.userEmail,
      ...movie,
    };

    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Movie added to favorites!");
        } else {
          toast.error("Failed to add the movie to favorites.");
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-5 my-10 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col lg:flex-row gap-5">
        <img
          src={movie.poster}
          alt={movie.title}
          className="rounded-lg w-full lg:w-1/3"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <p>
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {movie.duration}{" "}
            minutes
          </p>
          <p>
            <span className="font-semibold">Release Year:</span>{" "}
            {movie.releaseYear}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {movie.rating}/5
          </p>
          <p className="mt-3">
            <span className="font-semibold">Summary:</span> {movie.summary}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        <button
          onClick={handleDelete}
          className="btn bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Delete Movie
        </button>
        <button
          onClick={handleAddToFavorites}
          className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Add to Favorite
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
