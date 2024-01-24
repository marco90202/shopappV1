import React from "react";
/* import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail"; */
import { Container, Typography } from "@material-ui/core";
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
      <div id="contentAccount" className={classes.contentAccount}>
        <aside className="contentAside">
          <nav className={classes.listNav}>
            <ul className={classes.listUl}>
              <li className={classes.listLi}>
                <a className={classes.listText} href="#">
                  Mi Cuenta
                </a>
              </li>
              <li className={classes.listLi}>
                <a className={classes.listText} href="#">
                  Cambiar Contraseña
                </a>
              </li>
              <li className={classes.listLi}>
                <a className={classes.listText} href="#">
                  Cambiar Email
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div id="storeRow" className={classes.storeRow}>
          <div className={classes.storeCol}>
            <h2 className={classes.storeTitle}>Mi Cuenta</h2>
            <h3 className={classes.storeSubtitle}>Informaciones públicas</h3>
            <p className={classes.storeText}>Serán mostradas públicamente</p>
            <label for="nombre" className={classes.storeLabel}>
              Nombre para Mostrar
            </label>
            <input type="text" id="nombre" placeholder="Nombre para Mostrar" />
            <form>
              <h3 className={classes.storeSubtitle}>Informacion personal</h3>
              <p className={classes.storeText}>Serán mostradas públicamente</p>

              <label for="nombre" className={classes.storeLabel}>
                Login
              </label>
              <input type="text" id="nombre" placeholder="Login" />
              <div className={classes.storeName}>
                <div>
                  <label for="nombre" className={classes.storeLabel}>
                    Nombre
                  </label>

                  <input type="text" id="nombre" placeholder="Nombre" />
                </div>
                <div>
                  <label for="nombre" className={classes.storeLabel}>
                    Apellido
                  </label>
                  <input type="text" id="nombre" placeholder="Apellido" />
                </div>
              </div>
              <label for="nombre" className={classes.storeLabel}>
                Zona Horaria
              </label>
              <input type="text" id="nombre" placeholder="Zona Horaria" />
              <div className={classes.inputCheck}>
                <input
                  type="checkbox"
                  id="sendNewsletter"
                  className={classes.storeCheck}
                />
                <label for="sendNewsletter" className={classes.sendNewsletter}>
                  ¡Deseo recibir ofertas increíbles!
                </label>
              </div>
              <div className="storeRow">
                <div className="storeColumn">
                  <button type="submit" className="storeButton">
                    GUARDAR CAMBIOS
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <ChangePassword /> */}
          {/* <ChangeEmail /> */}
        </div>
      </div>
    </>
  );
};
export default Account;
