import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IUsuario } from '@/interfaces';


interface Props {
    usuarios: IUsuario[]
}
export const UsuariosLista:FC<Props> = ({ usuarios }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Rol</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    usuarios.map((usuario: IUsuario) => (
                        <TableRow key= { usuario.id } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { usuario.id }
                            </TableCell>
                            <TableCell align="right">{usuario.nombreCompleto}</TableCell>
                            <TableCell align="right">{usuario.correo}</TableCell>
                            <TableCell align="right">{usuario.rol}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}

