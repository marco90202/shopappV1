import React, { Fragment, useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../utils/axios-client";
import DetailsModal from "./DetailsModal";
import {
  Container,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "../styles";

const ProductList = ({ user_id, shopCart, addToCart }) => {
  const classes = useStyles();
  const { wishlisted, setWishlisted } = useStateContext();
  const object = {
    data: null,
    loader: true,
    error: null,
    cart: [],
  };
  const [scope, setScope] = useState(object);
  const [productDetail, setProductDetailt] = useState();
  const [wishlist, setWishlist] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const getDetails = (product) => {
    setProductDetailt(product);
    handleOpen();
  };

  const addCart = (product) => {
    let cartProduct = {
      title: product.title,
      price: product.salePrice === 0 ? product.normalPrice : product.salePrice,
    };
    addToCart(cartProduct);
  };

  const addWishList = (user_id, product_id) => {
    const payload = {
      user_id: user_id,
      product_id: product_id,
    };
    axiosClient
      .post("/wishlists", payload)
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

  return (
    <Fragment>
      <main>
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
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {wishlisted.length > 0 && scope.data !== null ? (
              scope.data.map((row, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={row.thumb}
                      title="Image title"
                    ></CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6">
                        {row.title}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        {"Normal : $" + row.normalPrice}
                        <br></br>
                        {"Ahorra: " + Math.round(row.savings) + "%"}
                        <br></br>
                        {row.salePrice === row.normalPrice
                          ? "Juego sin ofertas"
                          : "Oferta : $" + row.salePrice}
                      </Typography>
                      <div style={{ height: "10px" }}>
                        {wishlisted[index]?.product_id ? (
                          <FavoriteIcon
                            className="wishlistIcon"
                            key={index}
                            onClick={() => deleteWishList(row.id)}
                            style={{ color: "red" }}
                          />
                        ) : (
                          <FavoriteBorderOutlinedIcon
                            className="wishlistIcon"
                            onClick={() => addWishList(user_id, row.id)}
                          />
                        )}
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                        key={index}
                        variant="contained"
                        onClick={() => getDetails(row)}
                        size="small"
                        color="primary"
                      >
                        Detalles
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <div className={classes.progress}>
                {" "}
                <CircularProgress /> <CircularProgress color="secondary" />
              </div>
            )}
          </Grid>
        </Container>
      </main>
      {productDetail ? (
        <DetailsModal
          open={open}
          handleClose={handleClose}
          shopCart={shopCart}
          productDetail={productDetail}
          addCart={addCart}
        ></DetailsModal>
      ) : null}
    </Fragment>
  );
};
export default ProductList;
