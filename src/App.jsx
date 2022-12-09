
import React from 'react'
/* import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; */
import { ThemeProvider} from '@mui/material/styles';
import theme from './themeConfig';
import Navbar from './components/Navbar';
import ListPlanets from './components/ListPlanets';
/* const useStyles = makeStyles({
 clnavbar:{

 }
}) */
function App() {
 /*  const perNavbar=useStyles() */
  return (
    /*Put in the end   endIcon*/
    <ThemeProvider theme={theme} >  
      <Navbar/>
      <ListPlanets/>
    {/*   <Button 
      variant="contained"
       color='secondary'
       startIcon ={<ShoppingCartIcon/>}
       >
        Contained</Button> */}
     <h2>Hola</h2>
    </ThemeProvider>
  )
}

export default App
