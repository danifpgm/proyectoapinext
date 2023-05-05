import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import NextLink from 'next/link';
import { ICripto } from '@/interfaces';
import Link from 'next/link';


interface Props {
    criptos: ICripto[]
}
export const CriptosLista: FC<Props> = ({ criptos }) => {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
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
                            
                            <TableRow key= { cripto.id } 
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link key = { cripto.id } href={`/criptos/${cripto.id}`} component={NextLink}>
                                        { cripto.id }
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    <Link key = { cripto.id } href={`/criptos/${cripto.id}`} component={NextLink}>
                                        {cripto.nombre} 
                                    </Link>
                                </TableCell>
                                <TableCell align="left" sx={{ color: 'green' }}>
                                    <Link key = { cripto.id } href={`/criptos/${cripto.id}`} component={NextLink}>
                                        {cripto.precio}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

