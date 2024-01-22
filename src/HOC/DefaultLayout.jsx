import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../utils/axios-client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [cart, setCart] = useState(null);
  const user_id = parseInt(localStorage.getItem("user_id"));
  const {
    user,
    token,
    setUser,
    setToken,
    shopCart,
    setShopCart,
    suma,
    setSuma,
    scope,
    setScope,
  } = useStateContext();

  useEffect(() => {
    if (loading) {
      axiosClient.get("/user").then(({ data }) => {
        setUser(data);
      });
      getCart();
      getProducts();

    }
    if(scope.data && cart && loading2){
      isInCart();

    }
  }, [user,scope,cart]);

  const getProducts = () => {
    axiosClient
      .get("/products")
      .then(({ data }) => {
        setScope({
          ...scope,
          data: data.data,
          loader: false,
        });
        setLoading(false)
      })
      .catch(() => {
        setScope({
          ...scope,
          loader: false,
          error: "Error en respuesta",
        });
      });
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  const isInCart = () => {
    const leftJoinResultb = scope?.data?.filter(item1 =>
      cart?.some(item2 => item2.product_id === item1.id)
    );
    // console.log("leftJoinResult: ",leftJoinResultb);
    setShopCart( { ...shopCart, cart: leftJoinResultb })
    setLoading2(false)
    
  };

  const onLogout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
      // borrarCarrito();
      localStorage.removeItem("user_id");
    });
  };

  let carritoLength = shopCart?.cart?.length;
  const sumTotal = (shopCart) => {
    let total = 0;
    if (carritoLength > 0) {
      shopCart?.cart?.map((row, index) => (total = total + row.salePrice));
    }
    setSuma(total);
  };

  const restarTotal = (name,id) => {
    let newCart = {
      cart: shopCart?.cart?.filter((row) => row.title !== name),
    };
    deleteSingleCart(id);
    setShopCart(newCart);
    sumTotal(newCart);
  };

  const deleteSingleCart = (product_id) => {
    let response = shopCart.cart.find((value) => value.id === product_id);
    axiosClient
      .delete(`/carts/${response.id}`)
      .then(({ data }) => {
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  const deleteCart = () => {
    axiosClient
      .delete(`/carts/${user_id}`)
      .then(({ data }) => {
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  const borrarCarrito = () => {
    let emptyCart = {
      cart: [],
    };
    deleteCart()
    setShopCart(emptyCart);
    setSuma(0);
  };

  const getCart = () => {
    axiosClient
      .get(`/carts/${user_id}`)
      .then((response) => {
        setCart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Footer />
    </div>
  );
}
