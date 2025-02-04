import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllMovie from "../pages/AllMovie";
import AddMovie from "../pages/AddMovie";
import UpdateMovie from "../pages/UpdateMovie";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FavoriteMovie from "../pages/FavoriteMovie";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails";
import FeaturedMovie from "../components/FeaturedMovie";
import Upcoming from "../pages/Upcoming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <FeaturedMovie></FeaturedMovie>
          }
        ]

      },
      {
        path: '/all-movie',
        element: <AllMovie></AllMovie>
      },
      {
        path: '/movie/:id',
        element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://movie-portal-lilac.vercel.app/movie/${params.id}`)
      },
      {
        path: '/add-movie',
        element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
      },
      {
        path: '/update-movie/:id',
        element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
        loader: ({params})=> fetch(`https://movie-portal-lilac.vercel.app/movie/${params.id}`)
      },
      {
        path: '/favorite-movie',
        element: <PrivateRoute><FavoriteMovie></FavoriteMovie></PrivateRoute>
      },
      {
        path: '/upcoming',
        element: <Upcoming></Upcoming>        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);
export default router;