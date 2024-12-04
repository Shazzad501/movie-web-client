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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-movie',
        element: <AllMovie></AllMovie>,
        loader: ()=>fetch('http://localhost:5000/movie')
      },
      {
        path: '/add-movie',
        element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
      },
      {
        path: '/movie/:id',
        element: <UpdateMovie></UpdateMovie>
      },
      {
        path: '/favorite-movie',
        element: <PrivateRoute><FavoriteMovie></FavoriteMovie></PrivateRoute>
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