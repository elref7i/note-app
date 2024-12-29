import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import ProductedRoute from './Components/ProductedRoute/ProductedRoute';
import GuestRoute from './Components/GuestRoute/GuestRoute';
import Home from './pages/Home/Home';
import UserProvider from './context/User.context';
import NoteProvider from './context/Note.context';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProductedRoute>
          <Layout />
        </ProductedRoute>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: '/',
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <NoteProvider>
          <RouterProvider router={router} />
        </NoteProvider>
        <Toaster />
      </UserProvider>
    </>
  );
}
