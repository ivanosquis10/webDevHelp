import { Outlet } from 'react-router-dom';
import Modal from '../Components/Modal';
import Title from './Title';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="container mx-auto mt-8 bg-slate-900 rounded-lg shadow-2xl shadow-slate-900 ">
      <Modal />
      <Title />
      <main className="mt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
