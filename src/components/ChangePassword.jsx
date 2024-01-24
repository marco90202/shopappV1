import React from "react";
import useStyles from "../styles";

const ChangePassword = () => {
  const classes = useStyles();

  return (
    <div className={classes.changeRow}>
      <form>
        <div className={classes.contentTitle}>
          <h2 className={classes.changeSubtitle}>Cambiar Contraseña</h2>
        </div>
        <div className={classes.storeChange}>
          <label for="nombre" className={classes.storeLabel}>
            Nueva contraseña
          </label>
          <input type="text" id="nombre" placeholder="Nueva contraseña" />
          <label for="nombre" className={classes.storeLabel}>
            Confirmar contraseña
          </label>
          <input type="text" id="nombre" placeholder="Confirmar contraseña" />
          <label for="nombre" className={classes.storeLabel}>
            Contraseña Actual
          </label>
          <input type="text" id="nombre" placeholder="Contraseña actual" />
        </div>
        <div className={classes.changeRow}>
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
export default ChangePassword;
