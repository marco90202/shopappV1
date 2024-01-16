import React, {  Fragment } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import ProductList from "./ProductList";


const Home = () => {


  const { shopCart, setShopCart } = useStateContext();


  const addToCart = (product) => {
    setShopCart({ ...shopCart, cart: [...shopCart.cart, { product }] });
  };

  return (
    <Fragment>
     
      <ProductList shopCart={shopCart} addToCart={addToCart}/>
    </Fragment>
  );
};
export default Home;
