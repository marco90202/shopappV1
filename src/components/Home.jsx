import React, { useState, Fragment } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";

const Home = ({ user, onLogout }) => {
  const data = {
    cart: [],
  };

  const [shopCart, setShopCart] = useState(data);
  const [suma, setSuma] = useState(0);

  const addToCart = (product) => {
    setShopCart({ ...shopCart, cart: [...shopCart.cart, { product }] });
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
    <Fragment>
      <Header
        shopCart={shopCart}
        restarTotal={restarTotal}
        borrarCarrito={borrarCarrito}
        suma={suma}
        sumTotal={sumTotal}
        carritoLength={carritoLength}
        user={user}
        onLogout={onLogout}
      ></Header>
      <ProductList shopCart={shopCart} addToCart={addToCart}></ProductList>
      <Footer></Footer>
    </Fragment>
  );
};
export default Home;
