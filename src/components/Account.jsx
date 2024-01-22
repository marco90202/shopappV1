import React from "react";
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
      <div className={classes.contentAccount}>
        <aside>
          <nav className={classes.listNav}>
            <ul className={classes.listUl}>
              <li classNme={classes.listLi}>
                <a className={classes.listText} href="#">
                  Mi Cuenta
                </a>
              </li>
              <li classNme={classes.listLi}>
                <a className={classes.listText} href="#">
                  Cambiar Contraseña
                </a>
              </li>
              <li classNme={classes.listLi}>
                <a className={classes.listText} href="#">
                  Cambiar Email
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div>
          <h1>Mi Cuenta</h1>
          <h3>Informaciones públicas</h3>
          <p>Serán mostradas públicamente</p>
          <form>
            <fieldset>
              <label for="nombre">Nombre para mostrar</label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre para mostrar"
              />
              <h3>Informaciones públicas</h3>
              <p>Serán mostradas públicamente</p>
              <label for="nombre">Login</label>
              <input type="text" id="nombre" placeholder="Login" />
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre" />
              <label for="nombre">Apellido</label>
              <input type="text" id="nombre" placeholder="Apellido" />
              <label for="nombre">Zona Horaria</label>
              <input type="text" id="nombre" placeholder="Zona Horaria" />
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};
export default Account;
