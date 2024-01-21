import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./HOC/DefaultLayout";
import GuestLayout from "./HOC/GuestLayout";
import NotFound from "./views/Notfound";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Account from "./components/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/account",
        element: <Account />,
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
