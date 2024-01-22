import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import useStyles from "../styles";
import axiosClient from "../utils/axios-client";
import {
  Container,
  Grid,
  CardMedia,
  Typography,
  Divider,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Wishlist = () => {
  const { shopCart, setShopCart } = useStateContext();

  const object = {
    data: null,
    loader: true,
    error: null,
    cart: [],
  };
  const [scope, setScope] = useState(object);
  const user_id = localStorage.getItem("user_id");
  const [wishlist, setWishlist] = useState(null);
  const [wishlisted, setWishlisted] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    if (scope.data && wishlist) isWishListed();
    if (!scope.loader) return;

    getProducts();
    getWishlist();
  }, [scope, wishlist]);

  const getProducts = () => {
    axiosClient
      .get("/products")
      .then(({ data }) => {
        setScope({
          ...scope,
          data: data.data,
          loader: false,
        });
      })
      .catch(() => {
        setScope({
          ...scope,
          loader: false,
          error: "Error en respuesta",
        });
      });
  };

  const getWishlist = () => {
    axiosClient
      .get(`/wishlists/${user_id}`)
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isWishListed = () => {
    const leftJoinResult = scope.data.map((item1) => ({
      ...item1,
      ...wishlist.find((item2) => item2.product_id === item1.id),
    }));
    setWishlisted(leftJoinResult);
  };

  const deleteWishList = (product_id) => {
    let response = wishlist.find((value) => value.product_id === product_id);
    axiosClient
      .delete(`/wishlists/${response.id}`)
      .then(({ data }) => {
        getWishlist();
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  const addToCart = (product) => {
    setShopCart({ ...shopCart, cart: [...shopCart.cart, { product }] });
  };

  const addCart = (product) => {
    // let cartProduct = {
    //   title: product.title,
    //   price: product.salePrice === 0 ? product.normalPrice : product.salePrice,
    // };
    // addToCart(cartProduct);
    addToCart(product);
  };
  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Steam Deals Store
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Tu tienda de confianza, encuentra juegos de PC con grandes
            descuentos
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <div className={classes.contentBody}>
          <Grid container spacing={4} style={{gap:"10px"}}>
            {wishlisted.map(
              (row, index) =>
                row.product_id !== undefined && (
                  <Grid key={index} className="contentCard " item xs={12} sm={12} md={12}>
                    <div className="contentImage">
                      <FavoriteIcon
                        key={index}
                        onClick={() => deleteWishList(row.product_id)}
                        style={{ color: "red", margin: "25px 5px" }}
                      />
                      {/* <div className={classes.imgCard}></div> */}
                      <CardMedia
                        className={classes.imgCard}
                        image={row.thumb}
                        title="Image title"
                      ></CardMedia>
                      <Typography variant="h6">{row.title}</Typography>
                    </div>
                    <Divider style={{ height: "3px" }} />
                    <div className="contentBottom">
                      <Typography align="center" variant="h6">
                        {"Oferta : $" + row.salePrice}
                      </Typography>
                      <Button variant="contained" size="small" color="primary" onClick={() => addCart(row)} >
                        Agregar al carrito <ShoppingCartIcon />
                      </Button>
                    </div>
                  </Grid>
                )
            )}
          </Grid>
        </div>
      </Container>
    </>
  );
};
export default Wishlist;
