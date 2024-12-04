import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logoutUser()
    .then(()=>{
      toast.success("Log Out Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn hover:bg-transparent bg-transparent border-none shadow-none text-2xl">
          Movie <span className="text-red-400">Lover</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                isActive ? 'border-b-4 border-l-0 border-r-0 border-t-0' : ''
              }`
            }>
            Home
          </NavLink>
          <NavLink
            to="/all-movie"
            className={({ isActive }) =>
              `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                isActive ? 'border-b-4 border-l-0 border-r-0 border-t-0' : ''
              }`
            }>
            Movies
          </NavLink>
          <NavLink
            to="/add-movie"
            className={({ isActive }) =>
              `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                isActive ? 'border-b-4 border-l-0 border-r-0 border-t-0' : ''
              }`
            }>
            Add Movie
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <div
              title={user && user?.displayName}
              className="w-12 h-12 rounded-full overflow-hidden border-2">
              <img
                src={user && user?.photoURL}
                alt="User img"
                className="w-full h-full object-cover"
              />
            </div>
            <Link onClick={handleLogout} className="btn font-bold text-base">
              Logout
            </Link>
          </div>
        ) : (
          <Link to="/login" className="btn font-bold text-base">
            {location.pathname === '/register' ? 'Register' : 'Login'}
          </Link>
        )}

        {/* Mobile dropdown menu */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                  isActive ? 'border-b-4 border-l-0 border-r-0 border-t-0' : ''
                }`
              }>
              Home
            </NavLink>
            <NavLink
              to="/all-movie"
              className={({ isActive }) =>
                `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                  isActive ? 'border-b-4 border-l-0 border-r-0 border-t-0' : ''
                }`
              }>
              Movies
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
