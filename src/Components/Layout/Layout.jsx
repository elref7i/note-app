import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarWbsite from '../NavbarWbsite/NavbarWbsite';

export default function Layout() {
  return (
    <>
      <NavbarWbsite />
      <div className="min-h-[80vh] pt-[30px]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
