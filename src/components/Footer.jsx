import React from "react";
import { Box, Typography } from "@material-ui/core";
import GamesIcon from "@material-ui/icons/Games";
import useStyles from "../styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          lineHeight: "3rem",
          backgroundColor: "#3f51b5",
          color: "white",
        }}
      >
        <div className={classes.contentFooter}>
          <div className={classes.contentFooter}>
            <GamesIcon className={classes.dpad} />
            <Typography variant="h6">Steam Deals Store</Typography>
          </div>
          <Typography>Terminos de uso</Typography>
          <Typography>Politica de privacidad</Typography>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
