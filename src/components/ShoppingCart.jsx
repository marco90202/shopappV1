import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";

const ShoppingCart = ({
  suma,
  shopCart,
  restarTotal,
  borrarCarrito,
  open,
  toggleOpen,
  toggleClose,
}) => {

  const classes = useStyles();

console.log("shopcart in shopping cart: ",shopCart);

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={toggleOpen}
        onClose={toggleClose}
      >
        <Typography className={classes.progress} variant="h5">
          Tu carrito{" "}
          <Button
            onClick={() => borrarCarrito()}
            variant="contained"
            size="small"
            color="secondary"
          >
            {" "}
            Borrar Carrito{" "}
          </Button>
        </Typography>
        <ul className={classes.ul}>
          {shopCart.cart.length !== 0 ? (
            shopCart.cart.map((row, index) => (
              <div className={classes.li} key={index}>
                <p className={classes.p}>
                  {row.title + " - $ " + row.salePrice}{" "}
                </p>
                <Button
                  className={classes.butElim}
                  onClick={() => restarTotal(row.title,row.id)}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  {" "}
                  Eliminar{" "}
                </Button>{" "}
              </div>
            ))
          ) : (
            <p className={classes.li}>No hay juegos agregados</p>
          )}
        </ul>
        {shopCart.cart.length !== 0 ? (
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography className={classes.progress} variant="h5">
              Total $ {Math.round(suma * 100) / 100}{" "}
            </Typography>
            <Link to="/checkout">
              <Button
                onClick={toggleClose}
                className={classes.butElim}
                variant="contained"
                size="small"
                color="secondary"
              >
                <ShoppingCartIcon />Finalizar Compra
              </Button>
            </Link>
          </div>
        ) : null}
      </SwipeableDrawer>
    </Fragment>
  );
};
export default ShoppingCart;
