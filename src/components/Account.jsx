import React from "react";
import {
    Container,
    Typography,
  } from "@material-ui/core";
import useStyles from "../styles";

const Account = () => {
  const classes = useStyles();

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
      <div >
        hola
      </div>
    </>
  );
};
export default Account;
