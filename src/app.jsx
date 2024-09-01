import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    //   errorElement: <ErrorPage />
    },
  ]);

export default function App() {
    return <RouterProvider router={router} />
}