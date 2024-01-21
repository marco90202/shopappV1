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
  },

  contentCard: {
    display: "flex",
    
    
    backgroundColor: "green",
  },

  imgCard: {
    width: "184px",
    height: "64px",
    border: "1px solid #000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://cdn.cloudflare.steamstatic.com/steam/apps/2070000/capsule_sm_120.jpg?t=1704865963)",
  },
}));

export default useStyles;
