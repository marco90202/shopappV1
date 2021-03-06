import React,{useState, Fragment} from 'react'
import { Typography } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import useStyles from '../styles'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const DetailsModal = ({open, handleClose, shopCart, productDetail, addCart}) => {

    const classes = useStyles()

    const [modalConfirm, setModalConfirm] = useState(false)
    const handleOpenConfirm = () => {
        setModalConfirm(true)
      }
    
      const handleCloseConfirm = () => {
        setModalConfirm(false)
      }
    const getFecha = () => {
       let date=new Date(productDetail.releaseDate * 1000)

       return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
    }

    const getModalStyle = () => {
      
        return {
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }
    }

    const addingConfirm = (productDetail) => {
            addCart(productDetail)
            handleOpenConfirm()
    }

    const disableButton = (name) => {
       let flag = false
       shopCart.cart.filter(e => e.product.title === name).length > 0 ? flag =true : flag =false
       return flag 
    }
 
    return(
        <Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="title"
                aria-describedby="description"
            >
                <div style={getModalStyle()} className={classes.modal}>
                    <h2 id="title">{productDetail.title}</h2>
                        <img src={productDetail.thumb} alt="game img"></img>
                        <div id="description">
                                        {'Fecha Lanzamiento : ' + getFecha()}
                                        <br></br>
                                        { productDetail.steamRatingText === null ? 'Calificacion steam : Sin calificaci??n' : 'Calificacion steam : '+ productDetail.steamRatingText}
                                        <br></br>
                                        {'Normal : $'+ productDetail.normalPrice}
                                        <br></br>
                                        {'Ahorra: '+ Math.round(productDetail.savings) + '%'}
                                        <br></br>
                                        {productDetail.salePrice === productDetail.normalPrice ? 'Juego sin ofertas' : <Typography variant="h6" align="center" color="textPrimary" gutterBottom>{'Oferta : $'+ productDetail.salePrice }</Typography>}

                        </div>
                <Button variant="contained" disabled={disableButton(productDetail.title)} onClick={() => addingConfirm(productDetail)} size="small" color="primary">Agregar al carrito <ShoppingCartIcon /></Button>
                </div>
            </Modal>
            <Modal
                open={modalConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="title"
                aria-describedby="description"
            >
                <div style={getModalStyle()} className={classes.modalConfirm}>
                    <Typography variant="h6" align="center" color="textPrimary" gutterBottom> Producto agregado al carrito</Typography>
                        <div className={classes.check}><CheckCircleIcon ></CheckCircleIcon></div>
                        <br></br>
                <Button variant="contained" onClick={handleCloseConfirm} size="small" color="secondary">cerrar</Button>
                </div>
            </Modal>
        </Fragment>
    )
}
export default DetailsModal