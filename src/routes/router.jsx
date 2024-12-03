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
        element: <AllMovie></AllMovie>
      },
      {
        path: '/add-movie',
        element: <AddMovie></AddMovie>
      },
      {
        path: '/movie/:id',
        element: <UpdateMovie></UpdateMovie>
      },
      {
        path: '/favorite-movie',
        element: <FavoriteMovie></FavoriteMovie>
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