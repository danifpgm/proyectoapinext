import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, useContext } from 'react'
import { INft } from '../../interfaces/nft/INft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
interface Props {
    nft: INft
}

// const myLoader = ({src, width, quality}) =>{
//   // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
//   return `${src}?s=${width}`
// }

export const NftsDetalles:FC<Props> = ({nft}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    
  return (
    <Grid container spacing={3} sx={{ backgroundColor: 'white' }}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            src='/nft.png'
            alt='NFT'
            width={300}
            height={300}
            // loader={myLoader}
            // src= {nft.img}
            // alt={nft.nombre}
            // width={300}
            // height={300}
          />
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { nft.nombre}</Typography>
            <Box display='flex' flexDirection='row' >
              <Typography sx={{width: '40%'}}  variant='subtitle1' > ID </Typography>
              <Typography sx={{width: '60%'}}> {nft.id} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Nombre </Typography>
              <Typography sx={{width: '60%'}}> {nft.nombre} </Typography>
              {/* { usuario?.email} */}
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Publicación </Typography>
              <Typography sx={{width: '60%'}}> {nft.nombre} </Typography>
            </Box>
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> { nft.precio } €</Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a la cesta
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripcion" value="1" />
                <Tab label="Otra opción" value="2" />
                <Tab label="Otra opción" value="3" />
              </TabList>
            </Box>
            {/* <TabPanel value="1">{nft.nombre}</TabPanel>
            <TabPanel value="2">{nft.nombre}</TabPanel>
            <TabPanel value="3">{nft.nombre}</TabPanel> */}
            <TabPanel value="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam aliquid ullam itaque ratione facilis placeat rem aperiam accusantium blanditiis! Numquam impedit magnam incidunt ab animi illum accusantium facilis vitae?</TabPanel>
            <TabPanel value="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste veritatis unde nesciunt consectetur quae harum nam sed amet ad repellat delectus repudiandae consequuntur! Cupiditate, corporis recusandae. Similique, amet magni.</TabPanel>
            <TabPanel value="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat a quam, ab earum fuga sequi expedita eius! Iure explicabo provident iusto labore quia inventore dolor pariatur tempore officia voluptatibus?</TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
              <Typography  variant='subtitle1' > Sinpsis </Typography>
              <Typography> {libro.shortDescription} </Typography>
        </Box> */}


      </Grid>
    </Grid>

  )
}