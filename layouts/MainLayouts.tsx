import React, { FC } from 'react'
import { NavBar } from '../componentes/comunes/admin';

interface Props {
    children: any;
}
export const MainLayouts:FC<Props> = ({children}) => {
  return (
    <>
        <header>
        <title> Página de Criptos </title>
            <NavBar />
        </header>
        <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer>
            <h2>Footer de la página</h2>
        </footer>
    </>
  )
}
