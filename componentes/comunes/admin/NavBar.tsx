import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import { AuthContext } from "@/context";
import { useContext } from "react";

export const NavBar = () => {
    const { usuario } =  useContext(AuthContext); 
    console.log('usuario: ', usuario);
    return (
    <AppBar sx={{ backgroundColor:'green'}}>
        <Toolbar>

            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'black'}}>Home</Button>
                    { usuario?.nombreCompleto }
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                    sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/usuarios' passHref component={ NextLink }>
                    <Button sx={{ color: 'black'}}>Usuarios</Button>
                </Link>
                <Link href='/criptos' component={ NextLink }>
                    <Button sx={{ color: 'black'}}>Criptomonedas</Button>
                </Link>
                <Link href='/nft' component={ NextLink }>
                    <Button sx={{ color: 'black'}}>NFT</Button>
                </Link>
                <Box flex={1} />
                
            </Box>
            <Box flex={1} />
            <Link href='/auth/login' passHref component={ NextLink }>
                <Button sx={{ color: 'black'}}>Login</Button>
            </Link>
            <Box flex={1} />
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="black"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    )

    }