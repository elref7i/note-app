import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarWbsite from '../NavbarWbsite/NavbarWbsite';

export default function Layout() {
  return (
    <>
      <NavbarWbsite />
      <div className="min-h-[calc(100vh-64px)] pt-[90px] pb-20  bg-gray-900">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
