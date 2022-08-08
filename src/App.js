import logo from './logo.svg';
import './App.css';
import 'react-simple-keyboard/build/css/index.css';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, Container } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Teclado from './Teclado/Teclado.js';
import Tabla from './Tabla/Tabla';
import Cliente from './Cliente/Cliente';


function App() {
 

  return (

    <>

      <Cliente></Cliente>
    </>


  );

}



export default App;
