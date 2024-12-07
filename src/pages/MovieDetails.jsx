import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaDeleteLeft, FaLeftLong } from "react-icons/fa6";
import { FaEdit, FaHeart } from "react-icons/fa";

const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const handleDelete = (id) => {
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
          fetch(`https://movie-portal-lilac.vercel.app/movie/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "The movie has been deleted.", "success");
                navigate("/all-movie");
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
    const { _id, ...movieWithoutId } = movie;
    const favoriteData = { favoriteEmail: user?.email, ...movieWithoutId };
  
    fetch(`https://movie-portal-lilac.vercel.app/favorites/${user?.email}`)
      .then((res) => res.json())
      .then((favorites) => {
        const isAlreadyFavorite = favorites.some((fav) => fav.title === movie.title);
        if (isAlreadyFavorite) {
          toast.error("This movie is already in your favorites!");
        } else {
          fetch("https://movie-portal-lilac.vercel.app/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favoriteData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) toast.success("Movie added to favorites!");
              else toast.error("Failed to add movie to favorites.");
            })
            .catch((err) => {
              toast.error("Something went wrong!", err)
            });
        }
      });
  };

  useEffect(()=>{
    document.title = "Details || Movie Lover"
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-5 my-10 rounded-lg shadow-lg bg-white text-black">
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
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
      <Link 
        to={`/all-movie`}
        className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          <span className="font-bold text-lg"><FaLeftLong/></span> See all
        </Link>
        <button
          onClick={()=>handleDelete(movie._id)}
          className="btn bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
         <span className="font-bold text-xl"><FaDeleteLeft></FaDeleteLeft></span> Delete
        </button>
        <Link 
        to={`/update-movie/${movie._id}`}
        className="btn bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          <span className="font-bold text-lg"><FaEdit></FaEdit></span> Update
        </Link>
        <button
          onClick={()=>handleAddToFavorites(movie._id)}
          className="btn bg-red-400 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-lg"
        >
          <span className="font-bold text-lg"><FaHeart></FaHeart></span> Favorite
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
