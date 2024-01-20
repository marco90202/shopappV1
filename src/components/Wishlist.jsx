import React,{useState,useEffect} from "react";
import useStyles from "../styles";
import { Container, Typography } from "@material-ui/core";
import axiosClient from "../utils/axios-client";

import FavoriteIcon from "@material-ui/icons/Favorite";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if(!loading){
      getWishlist()
    };
    setLoading(true)
  },[]);

  const getWishlist = () => {
    setLoading(true);
    axiosClient.get('/users').then(({data}) => {
        setLoading(false);
        console.log(data);
    }).catch(() => {
        setLoading(false);
    })
  }

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
        lista de deseos
      </Container>
      <div className={classes.contentBody}>
        <div className={classes.contentCard}>
          <div classname={classes.bodyCard}>
            <FavoriteIcon
              style={{ color: "red", margin: "30px" }}
            ></FavoriteIcon>
            <div></div>
          </div>
          <div classname={classes.bodyCard}>
            <FavoriteIcon
              style={{ color: "red", margin: "30px" }}
            ></FavoriteIcon>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
