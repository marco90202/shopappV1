import React, { useState } from "react";
import axiosClient from "../utils/axios-client";
import { Container, Modal, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateContext } from "../contexts/ContextProvider";
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStyles from "../styles";

const Checkout = () => {
  const classes = useStyles();
  const [modalConfirm, setModalConfirm] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [inputCard, setInputCard] = useState(0);
  const [inputDate, setInputDate] = useState("");
  const [inputCvv, setInputCvv] = useState(0);
  const [inputName, setInputName] = useState("");
  const [confirmation, setConfirmation] = useState(false)
  const user_id = localStorage.getItem("user_id");
  const { shopCart } = useStateContext();

  const handleOpenConfirm = () => {
    setModalConfirm(true);
  };

  const handleCloseConfirm = () => {
    setModalConfirm(false);
  };

  const validateCard = (value) => {
    if (/^[0-9]*$/.test(value)) {
      setInputCard(value);
    }
  };

  const validateCvv = (value) => {
    if (/^[0-9]*$/.test(value)) {
      setInputCvv(value);
    }
  };

  const validateDate = (date) => {
      // Validate if the date is in the future
      const currentYear = new Date().getFullYear();
      const selectedYear = date.getFullYear();
  
      if (selectedYear >= currentYear) {
        setInputDate(date);
        // setError('');
      } else {
        // setError('Please enter a future expiration date.');
      }
  };

  const validateName = (value) => {
    if ((/^[a-zA-Z]+$/).test(value)) {
        setInputName(value);
      } 
  }

  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      width: "400px",
    };
  };

  const storeSale = () => {
    shopCart.cart.map((value) => {
        const payload = {
            user_id: user_id,
            product_id: value.id,
          };
          axiosClient
            .post("/sales", payload)
            .then(({ data }) => {
              console.log("response: ",data);
            })
            .catch((err) => {
              const response = err.response;
              if (response && response.status === 422) {
                console.log(response.data.errors);
              }
            });
    })
    setConfirmation(true);
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
      <div className="contentBody">
        <div className="contentContainer">
          <div className="content1">
            <div className="content3">
              <div className="tableRow">
                <h1>Mi carro</h1>
              </div>
              <div>
                <div className="tableRow">
                  <div>PRODUCTO</div>
                  <div>PRECIO</div>
                </div>
                {shopCart.cart.map((value, index) => (
                  <div key={index} className="tableRow">
                    <div>{value.title}</div>
                    <div>{'$ '+value.salePrice}</div>
                  </div>
                ))}
              </div>
              <div className="tableRow">
                <div>SUBTOTAL</div>
                <div>{'$ '+localStorage.getItem("suma")}</div>
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="content2">
              <div>
                <div className="tableRow">
                  <div>MÉTODOS DE PAGO</div>
                </div>
                <div className="tableRow">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      onClick={() => setButtonState(false)}
                      type="radio"
                      name="payment"
                      style={{ width: "14px", height: "31px" }}
                    />
                    <div>
                      <div>TARJETA DE CRÉDITO</div>
                      <div className="cardsIcons">
                        <img
                          src="https://assets.nuuvem.com/image/upload/v1/tag_group/56eb4810d2773413be00004a/tags/f4ba4mlmaqzdu9jqsf3b.png"
                          alt="visa"
                        />
                        <img
                          src="https://assets.nuuvem.com/image/upload/v1/tag_group/56eb4810d2773413be00004a/tags/ovnd2w6i9nhmurdps0bg.png"
                          alt="mastercard"
                        />
                        <img
                          src="https://assets.nuuvem.com/image/upload/v1/tag_group/56eb4810d2773413be00004a/tags/iuhzpulf70g2lomgxa3z.png"
                          alt="amex"
                        />
                        <img
                          src="https://assets.nuuvem.com/image/upload/v1/tag_group/56eb4810d2773413be00004a/tags/nud98fpl2nim8dxoezhg.png"
                          alt="diners"
                        />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="tableRow">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      onClick={() => setButtonState(false)}
                      type="radio"
                      name="payment"
                      style={{ width: "14px", height: "31px" }}
                    />
                    <div>
                      <div>PAGO EFECTIVO</div>
                      <div className="cardsIcons">
                        <img
                          src="https://assets.nuuvem.com/image/upload/v1/tag_group/56eb4810d2773413be00004a/tags/xbvvnj2yiek8xu9ty7mt.png"
                          alt="pago"
                        />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="content2">
              <div className="tableRow">
                <div>TOTAL</div>
                <div>{'$ '+localStorage.getItem("suma")}</div>
              </div>
              <div
                className="tableRow"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  className={classes.butElim}
                  onClick={handleOpenConfirm}
                  disabled={buttonState}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  <ShoppingCartIcon />
                  Finalizar Compra
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={modalConfirm}
          onClose={handleCloseConfirm}
          aria-labelledby="title"
          aria-describedby="description"
        >
          <div style={getModalStyle()} className={classes.modalConfirm}>
            <div>
              <h2>Pago con tarjeta de credito</h2>
              <br></br>
              <form>
                <label htmlFor="cardNumber">Numero de tarjeta:</label>
                <input
                  pattern="[0-9]"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Numero de tarjeta"
                  required
                  value={!inputCard ? "" : inputCard}
                  onChange={(e) => validateCard(e.target.value)}
                />

                <label htmlFor="expirationDate">Fecha de vencimiento:</label>
                <DatePicker
                  id="expiryDate"
                  selected={inputDate}
                  onChange={validateDate}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  placeholderText="MM/YYYY"
                />
                <br></br>
                {/* <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM/YYYY"
                  required
                  value={inputDate}
                  onChange={validateDate}
                /> */}

                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="Ingresar CVV"
                  required
                  value={!inputCvv ? "" : inputCvv}
                  onChange={(e) => validateCvv(e.target.value)}
                />

                <label htmlFor="cardholderName">Nombre y Apellido:</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  placeholder="Ingresar nombre y apellido"
                  required
                  value={!inputName ? "" : inputName}
                  onChange={(e) => validateName(e.target.value)}
                />

                {/* <button type="submit">Submit Payment</button> */}
              </form>
            </div>

            {/* <div className={classes.check}>
              <CheckCircleIcon></CheckCircleIcon>
            </div>
            <br></br> */}
            <div className={classes.closeButon}>
              <Button
                variant="contained"
                onClick={() => storeSale()}
                size="small"
                color="secondary"
              >
                Pagar
              </Button>
            </div>
          </div>
        </Modal>
        <Modal
        open={confirmation}
        onClose={() => setConfirmation(false)}
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
            Gracias por su compra
          </Typography>
          <br></br>
          <div className={classes.closeButon}>
            <Button
              variant="contained"
              onClick={() => setConfirmation(false)}
              size="small"
              color="secondary"
            >
              cerrar
            </Button>
          </div>
        </div>
      </Modal>
      </div>
    </>
  );
};
export default Checkout;
