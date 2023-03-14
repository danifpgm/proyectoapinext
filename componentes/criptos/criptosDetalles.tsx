import { Box, Button, Grid, Typography } from '@mui/material';
import React, { FC, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ICripto } from '@/interfaces';

interface Props {
    cripto: ICripto
}

export const CriptosDetalles:FC<Props> = ({ cripto }) => {
    console.log(cripto);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

  return (
    <Grid container spacing={3} sx={{ backgroundColor: 'white' }}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { cripto.nombre}</Typography>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Paginas </Typography>
            </Box>
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> { cripto.precio } </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a la cesta
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>

  )
}