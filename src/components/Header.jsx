import React, { useState, Fragment } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
} from "@material-ui/core";
import GamesIcon from "@material-ui/icons/Games";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";
import useStyles from "../styles";

import MenuIcon from "@material-ui/icons/Menu";

const Header = ({
  shopCart,
  restarTotal,
  borrarCarrito,
  suma,
  sumTotal,
  carritoLength,
  user,
  onLogout,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleOpen = () => {
    setOpen(true);
    sumTotal(shopCart);
  };

  const toggleClose = () => {
    setOpen(false);
  };
  const toggleOpenProfile = () => {
    setOpenProfile(true);
  };

  const toggleCloseProfile = () => {
    setOpenProfile(false);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <div onClick={toggleOpenProfile}>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <GamesIcon className={classes.dpad} />
          <Typography variant="h6">Steam Deals Store</Typography>
          <div className={classes.cart} onClick={toggleOpen}>
            {carritoLength !== 0 ? (
              carritoLength > 1 ? (
                <div className={classes.products}>{carritoLength}</div>
              ) : (
                <div className={classes.products}>{carritoLength}</div>
              )
            ) : null}{" "}
            <ShoppingCartIcon />
          </div>
        </Toolbar>
      </AppBar>
      {open ? (
        <ShoppingCart
          suma={suma}
          shopCart={shopCart}
          restarTotal={restarTotal}
          borrarCarrito={borrarCarrito}
          open={open}
          toggleOpen={toggleOpen}
          toggleClose={toggleClose}
        ></ShoppingCart>
      ) : null}
      {openProfile ? (
        <Profile
          open={openProfile}
          toggleOpen={toggleOpenProfile}
          toggleClose={toggleCloseProfile}
          user={user}
          onLogout={onLogout}
        />
      ) : null}
    </Fragment>
  );
};
export default Header;
