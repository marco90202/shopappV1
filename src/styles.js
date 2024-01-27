import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "4.5rem",
  },
  dpad: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  // cardGrid: {
  //   padding: "20px 0",
  // },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
    backgroundSize: "contain",
  },
  cardContent: {
    flexGrow: 1,
  },
  progress: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "25px",
  },
  cart: {
    marginLeft: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  products: {
    background: "#fff",
    color: "#000",
    borderRadius: "50px",
    padding: "0px 5px",
    fontSize: "11px",
    fontWeight: "900",
  },
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px  #000",
    borderRadius: "10px ",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalConfirm: {
    position: "relative",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: "1px  #000",
    borderRadius: "10px ",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  check: {
    paddingLeft: "3rem",
  },
  closeButon: {
    display: "flex",
    justifyContent: "center",
  },

  ul: {
    marginTop: "25px",
  },

  li: {
    marginRight: "3rem",
    marginLeft: "1rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "25px 0px",
  },
  p: {
    width: "234px",
  },
  button: {
    paddingLeft: "1rem",
  },
  butElim: {
    height: "34px",
  },
  titleCenter: {
    textAlign: "center",
  },
  centerContent: {
    display: "flex",
    justifyContent: "center",
  },
  mt15: {
    marginTop: "15px",
  },
  listContent: {
    padding: "20px 15px",
  },
  listUser: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentFooter: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  contentBody: {
    width: "100%",
    color: "#fff",
    padding: "20px",
    minHeight: "100vh",
    gap: "10px",
  },

  contentCard: {
    display: "flex",
  },

  imgCard: {
    width: "184px",
    height: "64px",
    border: "1px solid #000",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundImage:
    //   "url(https://cdn.cloudflare.steamstatic.com/steam/apps/2070000/capsule_sm_120.jpg?t=1704865963)",
  },

  contentAccount: {
    backgroundColor: "#151d27",
    padding: "30px 15px",
  },

  listNav: {
    width: "100%",
    /* minWidth: "178px", */
    height: "140px",
    padding: "10px 0px 0px 0px",
    borderRadius: "5px",
    backgroundColor: "#263241",
    // color: "#fff",
  },

  listUl: {
    margin: "0px",
    padding: "0px",
    listStyle: "none",
  },

  listLi: {
    fontSize: "14px",
    fontFamily: "Open Sans, sans-serif",
    height: "40px",
    padding: "10px 20px",

    "&:hover": {
      backgroundColor: "#09c",
      fontWeight: "700",
      color: "#fff",
    },
  },

  listText: {
    /*  width: "100%",
    height: "100%", */
    fontSize: "16px",
    lineHeight: "18px",
    textDecoration: "none",
    color: "#bbb",
    "&:hover": {
      color: "#fff",
    },
  },
  /* Estilos Mi cuenta*/

  storeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    padding: "0 10px",
    margin: "0 -10px",
  },

  storeCol: {
    maxWidth: "100%",
    gridColumn: "span 4",
    padding: "0 5px",
  },
  storeTitle: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: "15px",
    fontSize: "28px",
  },
  storeSubtitle: {
    color: "#fff",
    marginBottom: "5px",
    fontWeight: "700",
    fontSize: "20px",
  },

  storeChange: {
    marginBottom: "25px",
  },
  
  storeText: {
    color: "#96a6b7",
    marginBottom: "15px",
    fontSize: "14px",
  },
  storeLabel: {
    marginRight: "10px",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "700",
    lineHeight: "1",
    paddingBottom: "8px",
  },
  storeName: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  inputCheck: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "15px",
  },
  storeCheck: {
    width: "25px",
  },
  sendNewsletter: {
    color: "#fff",
  },

  /* Estilos cambiar contraseña */

  changeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    padding: "0 10px",
    margin: "0 -10px",
  },

  storeColumn: {
    maxWidth: "100%",
    margin: "20px 0 60px 0",
  },

  contentTitle: {
    width: "100%",
    padding: "0 5px",
  },
  changeSubtitle: {
    width: "329px",
    color: "#fff",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  /*Estilos Email */

  emailRow: {
    display: "grid",
    width: "100%",
  },
}));

export default useStyles;
