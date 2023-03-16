import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { INft } from "../../interfaces/nft/INft";
import NextLink  from 'next/link';

interface Props {
    nft: INft;
}
export const NftCard:FC<Props> = ({ nft }) => {
  return (
    <Grid item  xs= {6} sm={3} sx={{ width: '100%' }}>
        <Card sx={{ width: '100%' }}>
          <Link href={`/nft/${nft.id}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        src={ '/nft.png' } alt={ nft.nombre } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{nft.precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{nft.nombre}</Typography>
            <Typography fontWeight={500}>{nft.precio}</Typography>
        </Box>
    </Grid>
  )
}