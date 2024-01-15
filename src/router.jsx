import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./HOC/DefaultLayout";
import GuestLayout from "./HOC/GuestLayout";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/Notfound";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout Navigate />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
