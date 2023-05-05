import { Box, Grid, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IUsuario } from '@/interfaces/usuario/IUsuario';
import NextLink from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';
interface Props {
  usuarios: IUsuario[]
}
export const UsuariosListaAdmin:FC<Props> = ({ usuarios }) => {
  const router = useRouter()
  function onClickBorrar(row: IUsuario) {
    var misCabeceros = new Headers();
    misCabeceros.append("Content-Type", "application/json");

    var cuerpo = JSON.stringify({
    });

    var requestOpciones = {
        method: 'DELETE',
        headers: misCabeceros,
        body: cuerpo,
        redirect: 'follow'
    };

    fetch(`http://localhost:3000/api/usuarios/${row.id}`, requestOpciones)
    router.reload()
  }

  function onClickEditar(row: IUsuario) {
    Cookies.set('usuarioEditarId', row.id);
    Cookies.set('usuarioEditarCorreo', row.correo);
    Cookies.set('usuarioEditarNombre', row.nombreCompleto);
    Cookies.set('usuarioEditarRol', row.rol)
  }

  const colums: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 350},
        { field: 'nombreCompleto', headerName:'Nombre', width: 150 },
        { field: 'correo', headerName: 'Correo', width: 250 },
        { field: 'rol', headerName: 'Rol', width: 150 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: ({row}) => (
              <>
                <Link href='/admin/editarUsuario' component={ NextLink }>
                  
                  <ModeEditOutlineTwoToneIcon sx={{ color: 'blue'}} onClick={() => onClickEditar(row)}/>
                </Link>
                <Link href='/admin' component={ NextLink }>
                  <ClearIcon  sx={{ color: 'red'}} onClick={() => onClickBorrar(row)}/>
                </Link>
              </>
            ) 
        }
  ];
  const rows = usuarios;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Link href='/auth/register' component={ NextLink }>
                <Box >
                  <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
                </Box>
              </Link>
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: ICripto ) => row.id}
                  />
               </Grid>
            </Grid>
  )
}