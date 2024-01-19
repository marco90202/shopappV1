import { useState,useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../utils/axios-client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  const [loading, setLoading] = useState(false);
  const { user, token, setUser, setToken, shopCart, setShopCart, suma, setSuma } = useStateContext();

  useEffect(() => {
    if(!loading){
      axiosClient.get("/user").then(({ data }) => {
        setUser(data);
      });
    }
    setLoading(true);
  }, [user]);

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



  let carritoLength = shopCart.cart.length;
  const sumTotal = (shopCart) => {
    let total = 0;
    if (carritoLength > 0) {
      shopCart.cart.map((row, index) => (total = total + +row.product.price));
    }
    setSuma(total);
  };

  const restarTotal = (name) => {
    let newCart = {
      cart: shopCart.cart.filter((row) => row.product.title !== name),
    };
    setShopCart(newCart);
    sumTotal(newCart);
  };

  const borrarCarrito = () => {
    let emptyCart = {
      cart: [],
    };
    setShopCart(emptyCart);
    setSuma(0);
  };

  return (
    <div>
      <Header
        shopCart={shopCart}
        restarTotal={restarTotal}
        borrarCarrito={borrarCarrito}
        suma={suma}
        sumTotal={sumTotal}
        carritoLength={carritoLength}
        user={user.name}
        onLogout={onLogout}
      />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
