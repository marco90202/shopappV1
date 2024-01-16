import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../utils/axios-client";
import Home from "../components/Home";

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();
  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);
  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  return (
    <>
      <Home user={user.name} onLogout={onLogout} />
    </>
    // <div id="defaultLayout">
    //   <aside>
    //     <Link to="/dashboard">Dashboard</Link>
    //     <Link to="/home">Home</Link>
    //   </aside>
    //   <div className="content">
    //     <header>
    //       <div>Header</div>
    //       <div>
    //         {user.name}
    //         <a href="#" className="btn-logout" onClick={onLogout}>
    //           Logout
    //         </a>
    //       </div>
    //     </header>
    //     <main>
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
  );
}
