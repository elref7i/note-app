import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarWbsite from '../NavbarWbsite/NavbarWbsite';

export default function Layout() {
  return (
    <>
      <NavbarWbsite />
      <div className="h-[calc(100vh-64px)] pt-[72px] flex items-center justify-center  bg-gray-900">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
