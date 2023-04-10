import React, { FC } from 'react'
import { NavBar } from '../componentes/comunes/admin';
import { Box } from '@mui/material';

interface Props {
    children: any;
}
export const AdminLayout:FC<Props> = ({ children }) => {
  return (
    <>
        <header>
            <title> Admin </title>
            <NavBar />
        </header>
        <main>
            <Box sx={{marginLeft: 3}}>
               
            </Box>
            <Box sx={{ backgroundColor:'white' }}>
                { children }
            </Box>
        </main>
    </>
  )
}