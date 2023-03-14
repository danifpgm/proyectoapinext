import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { INft } from '@/interfaces';


interface Props {
    nfts: INft[]
}
export const NftsLista:FC<Props> = ({ nfts }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Creador</TableCell>
                <TableCell>Dueño</TableCell>
                <TableCell>Fecha de creación</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    nfts.map((nft: INft) => (
                        <TableRow key= { nft.id } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { nft.id }
                            </TableCell>
                            <TableCell align="right">{nft.nombre}</TableCell>
                            <TableCell align="right">{nft.creadoPorUsuario}</TableCell>
                            <TableCell align="right">{nft.poseeUsuario}</TableCell>
                            <TableCell align="right">{nft.fechaCreacion}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}

