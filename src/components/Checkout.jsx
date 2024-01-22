import React from "react";
import { Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "../styles";

const Checkout = () => {
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
                <div className="tableRow">
                  <div>Distant Worlds 2</div>
                  <div>50.42</div>
                </div>
                <div className="tableRow">
                  <div>Distant Worlds 2</div>
                  <div>50.42</div>
                </div>
                <div className="tableRow">
                  <div>Street Fighter 6</div>
                  <div>151.79</div>
                </div>
              </div>
              <div className="tableRow">
                <div>SUBTOTAL</div>
                <div>202.21</div>
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
                      type="radio"
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
                      type="radio"
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
              <div className="tableRow" >
                <div>TOTAL</div>
                <div>202.21</div>
              </div>
              <div className="tableRow" style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  className={classes.butElim}
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
      </div>
    </>
  );
};
export default Checkout;
