import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Title from './Title';

// const Title = lazy(() => import('./Title'));
// const Footer = lazy(() => import('../Components/Footer'));

const Layout = () => {
  return (
    <div className="container mx-auto mt-8 bg-slate-900 rounded-lg shadow-2xl shadow-slate-900 ">
      <Title />
      <main className="mt-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
