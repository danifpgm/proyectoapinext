import { Card, CardContent, Box, Button, Grid, Typography, CardActions, TextField } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { FC, useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ICripto } from '@/interfaces';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import router from 'next/router';


interface Props {
    cripto: ICripto
}

export const CriptosDetalles:FC<Props> = ({ cripto }) => {
  console.log(cripto);
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  function comprarCripto() {
    const idUsuario = Cookies.get('id');
  
    var misCabeceros = new Headers();
    misCabeceros.append("Content-Type", "application/json");
  
    var cuerpo = JSON.stringify({
      "usuario": idUsuario,
      "criptomoneda": cripto.id,
      "cantidad": cantidad
    });
  
    var requestOpciones = {
      method: 'POST',
      headers: misCabeceros,
      body: cuerpo,
      redirect: 'follow'
    };
  
    fetch("http://localhost:3000/api/usuario-posee-cripto", requestOpciones)
      .then ( respuesta => {
        if (!respuesta.ok) {
            console.log(Promise.reject(respuesta));
        } else {
            // console.log(respuesta.json());
            console.log(respuesta);
            // router.replace('/admin')
        }
    })
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const compraQuery = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    if (cantidad > 0) {
      compraQuery();
      setOpen(false);
      if ( cantidad == 1) {
        toast.success(`Has comprado ${cantidad} unidad de ${cripto.nombre} a ${cripto.precio}€`);
        comprarCripto();
      } else {
        toast.success(`Has comprado ${cantidad} unidades de ${cripto.nombre} a ${cripto.precio}€`);
      }
    } else {
      toast.error('Por favor, introduce una cantidad válida');
    }
  };

  return (
    <Grid>
      <Card sx={{ backgroundColor: '#E8F5E9', width: '100%' }}>
        <CardContent>
          <Typography variant='h5' component='h5'
            sx={{ fontSize: '25px', textAlign: 'center', mb: '10px', color: 'green' }}
          > {cripto.nombre}</Typography>
          <Box display='flex' flexDirection='row'>
            <Typography sx={{ width: '40%', color: 'green' }} variant='subtitle1' > Precio </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '20px', color: 'green' }}> {cripto.precio}€ </Typography>
          <Button variant="contained" endIcon={<ShoppingCartIcon />} onClick={handleClickOpen} sx={{ backgroundColor: 'green', color: 'white' }}>
            Comprar
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Comprar: {cripto.nombre}</DialogTitle>
        <DialogContent>
          <Typography>Precio: {cripto.precio}</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="cantidad"
            label="Cantidad"
            type="number"
            fullWidth
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Comprar</Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </Grid>
  );
}