import React, { useState, Fragment } from "react";
import { Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import axiosClient from "../utils/axios-client";

const DetailsModal = ({
  open,
  handleClose,
  shopCart,
  productDetail,
  addCart,
}) => {
  const classes = useStyles();
  const user_id= parseInt(localStorage.getItem("user_id"));
  const [modalConfirm, setModalConfirm] = useState(false);
  const handleOpenConfirm = () => {
    setModalConfirm(true);
  };

  const handleCloseConfirm = () => {
    setModalConfirm(false);
  };
  const getFecha = () => {
    let date = new Date(productDetail.releaseDate * 1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate(); 
    return day+"/"+month+"/"+year;
  }

  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
  };
  // console.log("productDetail: ",productDetail)
  const addingConfirm = (productDetail) => {
    storeCart(user_id,productDetail.id);
    addCart(productDetail);
    handleOpenConfirm();
  };

  const disableButton = (name) => {
    let flag = false;
    shopCart.cart.filter((e) => e.title === name).length > 0
      ? (flag = true)
      : (flag = false);
    return flag;
  };

  const storeCart = (user_id, product_id) => {
    const payload = {
      user_id: user_id,
      product_id: product_id,
    };
    axiosClient
      .post("/carts", payload)
      .then(({ data }) => {
      //  console.log("save carts: ",data);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <div style={getModalStyle()} className={classes.modal}>
          <h2 id="title" className={classes.titleCenter}>
            {productDetail.title}
          </h2>
          <div className={classes.centerContent}>
            <img src={productDetail.thumb} alt="game img"></img>
          </div>
          <div id="description" className={classes.mt15}>
            {"Fecha Lanzamiento : " + getFecha()}
            <br></br>
            {productDetail.steamRatingText === null
              ? "Calificacion steam : Sin calificación"
              : "Calificacion steam : " + productDetail.steamRatingText}
            <br></br>
            {"Normal : $" + productDetail.normalPrice}
            <br></br>
            {"Ahorra: " + Math.round(productDetail.savings) + "%"}
            <br></br>
            {productDetail.salePrice === productDetail.normalPrice ? (
              "Juego sin ofertas"
            ) : (
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {"Oferta : $" + productDetail.salePrice}
              </Typography>
            )}
          </div>
          <div className={classes.centerContent}>
            <Button
              variant="contained"
              disabled={disableButton(productDetail.title)}
              onClick={() => addingConfirm(productDetail)}
              size="small"
              color="primary"
            >
              Agregar al carrito <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={modalConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <div style={getModalStyle()} className={classes.modalConfirm}>
          <Typography
            variant="h6"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {" "}
            Producto agregado al carrito
          </Typography>
          <div className={classes.check}>
            <CheckCircleIcon></CheckCircleIcon>
          </div>
          <br></br>
          <div className={classes.closeButon}>
            <Button
              variant="contained"
              onClick={handleCloseConfirm}
              size="small"
              color="secondary"
            >
              cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
export default DetailsModal;
