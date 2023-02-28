import { Box, Button, Link, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react"
import NextLink from 'next/link';


interface Props {
    title: string;
    children?: any
}
export const AuthLayout:FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> Autenticación </title>
        </Head>
        <header>
        <Box component="nav" 
                 sx= {{ padding:'10', backgroundColor:'red', alignItems:'center',  display: { xs: 'none', sm: 'flex' }}} >
                <Box flex={2} />  
                    <Typography fontWeight={700}>Zona de Autenticación</Typography> 
                <Box flex={2} />   
                <Link href='/auth/register' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Registro</Button>
                </Link>
                <Box flex={1} />   
        </Box>
        </header>
        <main>
            <Box sx={{marginLeft: 3}}>
               
            </Box>
            <Box display='flex' justifyContent={'center'} alignItems='center' height="calc(100vh - 200px)">
                { children }
            </Box>
        </main>
        <footer>
            <h2>Zona de Footer</h2>
        </footer>
    </>
  )
}

