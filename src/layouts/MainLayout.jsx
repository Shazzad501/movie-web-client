import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeChanger from '../components/ThemeChanger';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const MainLayout = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  if(loading){
   return <Loading></Loading>
  }
  return (
    <div className=''>
      {/* navigation bar */}
      <nav className='sticky top-0 left-0 right-0 z-50'>
        <Navbar></Navbar>
      </nav>
      <div className='fixed top-20 left-0 z-50'>
        <ThemeChanger></ThemeChanger>
      </div>
      {/* Router Outlet */}
      <section className='w-11/12 mx-auto'>
      <Outlet></Outlet>
      </section>
      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;