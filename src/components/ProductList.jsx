import React, {Fragment, useState, useEffect} from 'react'
import DetailsModal from './DetailsModal'
import { Container, Typography, Card, Grid, CardMedia, CardContent, CardActions } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import useStyles from '../styles'
import { get } from '../utils/Helpers'

const ProductList = ({shopCart, addToCart}) => {

    const classes = useStyles()

    const object = {
        data : null,
        loader : true,
        error : null,
        cart : []
    }

    const [scope, setScope] = useState(object)
    const [productDetail, setProductDetailt] = useState()
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }

    useEffect(() => {

        if(!scope.loader ) return 

        let random = Math.floor(Math.random() * 15) + 1 

        get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice='+random, null, function(status, response){
            if(status === 200){
                setScope({
                        ...scope,
                            data: response,
                            loader : false
                })
            }else{
                setScope({
                    ...scope,
                        loader : false,
                        error : 'Error en respuesta'
                })
            }
        })
    },[scope])

    const getDetails = (product) => {
        setProductDetailt(product)
        handleOpen()
    }

    const addCart = (product) => {
        let cartProduct = {
            title: product.title,
            price: product.salePrice === 0 ? product.normalPrice : product.salePrice
        }
        addToCart(cartProduct)
    }

    

    return (
            <Fragment>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm">
                            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                                Steam Deals Store
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Tu tienda de confianza, encuentra juegos de PC con grandes descuentos
                            </Typography>
                        </Container>
                    </div>
                    <Container maxWidth="md">
                        <Grid container spacing={4}>
                            {scope.data !== null ? scope.data.map((row,index) => 
                                            <Grid item key={index} xs={12} sm={6} md={3}>
                                                <Card className={classes.card}>
                                                    <CardMedia className={classes.cardMedia} 
                                                            image={row.thumb}
                                                            title="Image title">
                                                    </CardMedia>
                                                    <CardContent className={classes.cardContent}>
                                                            <Typography gutterBottom variant="h6">
                                                                {row.title}
                                                            </Typography>
                                                            <Typography gutterBottom variant="subtitle1">
                                                                {'Normal : $'+ row.normalPrice}
                                                                <br></br>
                                                                {'Ahorra: '+ Math.round(row.savings) + '%'}
                                                                <br></br>
                                                                {row.salePrice === row.normalPrice ? 'Juego sin ofertas' :'Oferta : $'+ row.salePrice }
                                                            </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button key={index} variant="contained" onClick={() => getDetails(row)} size="small" color="primary">Detalles</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                ) : <div className={classes.progress}> <CircularProgress /> <CircularProgress color="secondary" /></div>
                            }
                        </Grid>
                    </Container>
                </main>
                {productDetail ? <DetailsModal open={open} handleClose={handleClose} shopCart={shopCart} productDetail={productDetail} addCart={addCart}></DetailsModal> : null}            
            </Fragment>
    )
}
export default ProductList