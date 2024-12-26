import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarWbsite from '../NavbarWbsite/NavbarWbsite';

export default function Layout() {
  return (
    <>
      <NavbarWbsite />
      <div className="min-h-[60vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
