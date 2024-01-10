import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useStyles from "../styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

const Profile = ({ open, toggleOpen, toggleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={toggleOpen}
        onClose={toggleClose}
      >
        <div className={classes.listContent}>
          <List component="nav">
            <div className={classes.listUser}>
              <p>usuario</p>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
            </div>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de deseos" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Mis pedidos" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Mi cuenta" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar sesion" />
            </ListItem>

            <Divider />
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Profile;
