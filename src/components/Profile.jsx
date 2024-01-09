import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Profile = ({ open, toggleOpen, toggleClose }) => {
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={toggleOpen}
        onClose={toggleClose}
      >
        hola mundo
      </SwipeableDrawer>
    </div>
  );
};

export default Profile;
