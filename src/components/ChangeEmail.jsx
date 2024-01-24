import React from "react";
import useStyles from "../styles";

const ChangeEmail = () => {
  const classes = useStyles();

  return (
    <div className={classes.emailRow}>
      <form>
        <div>
          <h2 className={classes.changeSubtitle}>Cambiar e-mail</h2>
        </div>
        <div style={{width:"65%"}}>
          <label for="nombre" className={classes.storeLabel}>
            Email
          </label>
          <input type="email" id="nombre" placeholder="Email" />
          <label for="nombre" className={classes.storeLabel}>
            Contraseña actual
          </label>
          <input type="email" id="nombre" placeholder="Password" />
        </div>
        <div className={classes.emailRow}>
          <div className={classes.storeColumn}>
            <button type="submit" className={classes.storeButton}>
              GUARDAR CAMBIOS
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
