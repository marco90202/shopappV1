import React,{ Fragment} from 'react'
import { Typography } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useStyles from '../styles'
import Button from '@material-ui/core/Button'

const ShoppingCart = ({suma, shopCart, restarTotal, borrarCarrito, open, toggleOpen, toggleClose}) => {
    
    const classes = useStyles()

    return (
            <Fragment>
                    <SwipeableDrawer
                        anchor="right"
                        open={open}
                        onOpen={toggleOpen}
                        onClose={toggleClose}
                    >
                        <Typography className={classes.progress} variant="h5">Tu carrito <Button onClick={() => borrarCarrito()} variant="contained" size="small" color="secondary"> Borrar Carrito </Button></Typography>
                        <ul>
                          {shopCart.cart.length !== 0 ? shopCart.cart.map((row,index) => <p className={classes.li} key={index}>{row.product.title + ' - ' + row.product.price} <Button onClick={() => restarTotal(row.product.title)} variant="contained" size="small" color="secondary"> Eliminar </Button> </p>) : <p className={classes.li}>No hay juegos agregados</p>}
                        </ul>
                          {shopCart.cart.length !== 0 ? <Typography className={classes.progress} variant="h5">Total {Math.round(suma * 100)/100} </Typography>   : null }
                    </SwipeableDrawer>

            </Fragment>
    )
}
export default ShoppingCart