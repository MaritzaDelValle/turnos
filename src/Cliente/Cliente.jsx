import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect, Suspense } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from './../firebase/firebaseConfig.js';
import './Cliente.css';
import { shadows } from '@mui/system';
import { Container } from '@mui/material';

const Cliente= () => {

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const [rows, setRows] = useState([]);

    useEffect(() => {
      const obtenerDatos = async () => {
        const datos = await getDocs(collection(db, 'pendientes'));
        setRows(datos.docs.map((doc) => ({...doc.data(), id: doc.Cliente, id: doc.Cajere})));
      }
      obtenerDatos();
    }, [])


  return (
    <>
    {rows.map((row) => (
        <Card className='tarjeta' sx={{shadows: 4}}>
        <CardContent className='tarjeta_contenido'>
        <span className='tarjeta_titulos'>
        <Typography variant="h4"  color="text.secondary" >
          Cliente:
        </Typography>
        </span>
          <Typography variant="h3" component="div">
                {row.Cliente}
          </Typography>
          <br></br>
          <span>
          <Typography variant="h4"  color="text.secondary">
          A Caja:
        </Typography>
        </span>
          <Typography variant="h1" component="div">
                {row.Cajere}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </>
  );

}
export default Cliente