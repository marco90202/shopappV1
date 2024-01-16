import React from "react";
import {Link} from "react-router-dom";
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
import HomeIcon from '@material-ui/icons/Home';

const Profile = ({ open, toggleOpen, toggleClose, user, onLogout }) => {
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
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={user} />
            </ListItem>

            <Divider />
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/"><ListItemText primary="Inicio" /></Link>
              
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <Link to="/wishlist"><ListItemText primary="Lista de deseos" /></Link>
              
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
              <ListItemText primary="Cerrar sesion" onClick={onLogout} />
            </ListItem>

            <Divider />
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Profile;
