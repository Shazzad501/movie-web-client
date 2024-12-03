import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import ThemeChanger from '../components/ThemeChanger';

const MainLayout = () => {
  return (
    <div>
      {/* navigation bar */}
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* <div>
        <ThemeChanger></ThemeChanger>
      </div> */}
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