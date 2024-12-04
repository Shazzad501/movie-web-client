import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn hover:bg-transparent bg-transparent border-none shadow-none text-2xl">Movie <span className='text-red-400'>Lover</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <NavLink to='/' className={({isActive})=> `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2  bg-transparent font-bold text-base ${isActive ?"border-b-4 border-l-0 border-r-0 border-t-0 hover:border-b" :''}`}>Home</NavLink>
          <NavLink to='/all-movie' className={({isActive})=> `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2  bg-transparent font-bold text-base ${isActive ?"border-b-4 border-l-0 border-r-0 border-t-0 hover:border-b" :''}`}>Movies</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link to='/login' className="btn font-bold text-base">Login</Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           <NavLink to='/' className={({isActive})=> `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2  bg-transparent font-bold text-base ${isActive ?"border-b-4 border-l-0 border-r-0 border-t-0 hover:border-b" :''}`}>Home</NavLink>
           <NavLink to='/all-movie' className={({isActive})=> `btn hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2  bg-transparent font-bold text-base ${isActive ?"border-b-4 border-l-0 border-r-0 border-t-0 hover:border-b" :''}`}>Movies</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;