import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
