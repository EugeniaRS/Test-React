
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'
import { Button } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';


import BottomNavigationAction from '@mui/material/BottomNavigationAction';
const useStyles= makeStyles(theme =>({
    offset:theme.mixins.toolbar,
    menuButton:{
        marginRight:theme.spacing(2),
    },
    title:{
        flexGrow: 1
    }
    
}))

const Navbar = () => {
    const clases =useStyles()
  return (
    
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton color='inherit' aria-label='menu' className={clases.menuButton}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={clases.title}>
              Planetas
            </Typography>
            <Button variant='text' color='inherit' endIcon={<GradeIcon/>}>Favoritos</Button>
     
          </Toolbar>
        </AppBar>
        <div className={clases.offset}>

        </div>

    </div>
  )
}

export default Navbar 

