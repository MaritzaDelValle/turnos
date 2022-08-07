import logo from './logo.svg';
import './App.css';
import 'react-simple-keyboard/build/css/index.css';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, Container } from '@material-ui/core';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Teclado from './Teclado/Teclado.js';
import Tabla from './Tabla/Tabla';


function App() {
 

  return (

    <>
    <Teclado></Teclado>
      <Button variant="contained">Soy unbutton</Button>
      <TableCell></TableCell>
      <Container>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" variant="outlined" />
        </Box>
        <Tabla></Tabla>
      </Container>

    </>


  );

}



export default App;
