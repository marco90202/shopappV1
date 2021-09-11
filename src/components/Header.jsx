import React , {useState, Fragment} from 'react'
import { Typography, AppBar, Toolbar, CssBaseline } from '@material-ui/core'
import GamesIcon from '@material-ui/icons/Games'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShoppingCart from './ShoppingCart'
import useStyles from '../styles'

const Header = ({shopCart, restarTotal, borrarCarrito, suma, sumTotal, carritoLength}) => {
    
    const classes = useStyles()

    const [open, setOpen] = useState(false) 


    const toggleOpen = () => {
        setOpen(true)
        sumTotal(shopCart)
    }

    const toggleClose = () => {
        setOpen(false)
    }

    return(
        <Fragment>
            <CssBaseline />
                <AppBar position="fixed"> 
                    <Toolbar>
                        <GamesIcon className={classes.dpad}/> 
                        <Typography variant="h6">
                                Steam Deals Store
                        </Typography>
                        <div className={classes.cart} onClick={toggleOpen}>
                            {carritoLength !== 0 ?  carritoLength > 1 ? '|| ' + carritoLength + ' juegos ||' : '|| ' + carritoLength + ' juego ||' : null}  <ShoppingCartIcon  /> 
                        </div>
                    </Toolbar>
                </AppBar> 
                {open ? <ShoppingCart suma={suma} shopCart={shopCart} restarTotal={restarTotal} borrarCarrito={borrarCarrito} open={open} toggleOpen={toggleOpen} toggleClose={toggleClose}></ShoppingCart> : null}
        </Fragment>
         
    )
}
export default Header