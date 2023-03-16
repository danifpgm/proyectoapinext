import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import NextLink from 'next/link';
import { ICripto } from '@/interfaces';
import Link from 'next/link';


interface Props {
    criptos: ICripto[]
}
export const CriptosLista:FC<Props> = ({ criptos }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    criptos.map((cripto: ICripto) => (
                        <Link key = { cripto.id } href={`/criptos/${cripto.id}`} component={NextLink}>
                            <TableRow key= { cripto.id } 
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    { cripto.id }
                                </TableCell>
                                <TableCell align="right">{cripto.nombre}</TableCell>
                                <TableCell align="right">{cripto.precio}</TableCell>
                            </TableRow>
                        </Link>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}

