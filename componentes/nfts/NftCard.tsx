import { Box, Button, Card, CardActionArea, CardMedia, Grid, Link, Menu, MenuItem, Typography } from "@mui/material";
import { FC, useState } from "react";
import { INft } from "../../interfaces/nft/INft";
import NextLink  from 'next/link';

interface Props {
    nft: INft;
}

export const NftCard:FC<Props> = ({ nft }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <Link href={`/nft/${nft.id}`}  passHref component={NextLink} prefetch={false}>
        <CardActionArea>
          <CardMedia component="img" height="140" image="/nft.png" alt={nft.nombre} />
        </CardActionArea>
      </Link>
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">{nft.nombre}</Typography>
        <Button size="small" onClick={handleMenuOpen}>
          Comprar
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Paypal</MenuItem>
          <MenuItem onClick={handleMenuClose}>Tarjeta de crédito</MenuItem>
        </Menu>
      </Box>
      <Typography variant="subtitle1" color="text.secondary">
        {nft.fechaCreacion}
      </Typography>
      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2" color="text.secondary">
          Precio:
        </Typography>
        <Typography variant="h6">{nft.precio} €</Typography>
      </Box>
    </Box>
    </Card>
  )
}