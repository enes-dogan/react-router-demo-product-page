import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home.tsx';
import ProductsPage from './pages/Products.tsx';
import RootLayout from './pages/Root.tsx';
import ErrorPage from './pages/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/test', element: <h1>TESTING</h1> },
      {
        path: '/products',
        element: <ProductsPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
