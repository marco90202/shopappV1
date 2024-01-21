import React, { useState, useEffect } from "react";
import useStyles from "../styles";
import axiosClient from "../utils/axios-client";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!loading) {
      getWishlist();
    }
    setLoading(true);
  }, []);

  const getWishlist = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        setLoading(false);
      });
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
          <Grid container spacing={4}>
            <Grid className="contentCard " item xs={12} sm={12} md={12}>
              <div className="contentImage">
                <FavoriteIcon
                  style={{ color: "red", margin: "25px 5px" }}
                ></FavoriteIcon>
                <div className={classes.imgCard}></div>
                <Typography variant="h6">Heavy Burden</Typography>
              </div>
              <Divider style={{ height: "3px" }} />
              <div className="contentBottom">
                <Typography align="center" variant="h6">
                  41,26 PEN
                </Typography>
                <Button variant="contained" size="small" color="primary">
                  Agregar al carrito <ShoppingCartIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
export default Wishlist;
