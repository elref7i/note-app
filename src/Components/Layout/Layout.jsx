import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarWbsite from '../NavbarWbsite/NavbarWbsite';

export default function Layout() {
  return (
    <>
      <NavbarWbsite />
      <main className="bg-gray-900">
        <div className="container min-h-[calc(100vh-64px)] pt-[90px] pb-20">
          <Outlet></Outlet>
        </div>
      </main>
      <Footer />
    </>
  );
}
