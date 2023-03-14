import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink  from 'next/link';
import { ICripto } from "@/interfaces";

interface Props {
    cripto: ICripto;
}
export const CriptoCard:FC<Props> = ({ cripto }) => {
  return (
    <Grid item  xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/cripto/${cripto.nombre}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{cripto.precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{cripto.nombre}</Typography>
            <Typography fontWeight={500}>{cripto.precio}</Typography>
        </Box>
    </Grid>
  )
}