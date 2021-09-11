import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
        container : {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
            paddingTop: '4.5rem'
        },
        dpad : {
            marginRight : '20px'
        },
        buttons : {
            marginTop : '40px'
        },
        cardGrid : {
            padding : '20px 0'
        },
        card : {
            height : '100%',
            display : 'flex',
            flexDirection : 'column'
        },
        cardMedia : {
            paddingTop : '56.25%'
        },
        cardContent : {
            flexGrow : 1
        },
        progress: {
            marginLeft : 'auto',
            marginRight : 'auto'
        },
        cart:{
            marginLeft : 'auto',
            textAlign : 'center'
        },
        modal: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px  #000',
            borderRadius: '10px ',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
          modalConfirm: {
            position: 'relative',
            width: 200,
            backgroundColor: theme.palette.background.paper,
            border: '1px  #000',
            borderRadius: '10px ',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
          check : {
            paddingLeft : '3rem'
          },
          li : {
            marginRight : '3rem',
            marginLeft : '1rem',
            textAlign : 'center'
          },
          button : {
            paddingLeft : '1rem'
          }

}))

export default useStyles