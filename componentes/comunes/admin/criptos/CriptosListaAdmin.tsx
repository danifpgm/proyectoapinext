import { Box, Grid, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { ICripto } from '@/interfaces/cripto/ICripto';
import NextLink from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import router, { useRouter } from 'next/router';
<<<<<<< HEAD

=======
>>>>>>> 14ce431a87b8d116ca66825ec9423d0b6a03171d
interface Props {
  criptos: ICripto[]
}
export const CriptosListaAdmin:FC<Props> = ({criptos}) => {
  const router = useRouter()
  function onClick(row: ICripto) {
    var id = row.id
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

    fetch(`http://localhost:3000/api/cripto/${id}`, requestOpciones)
<<<<<<< HEAD
    //     .then ( respuesta => {
    //         if (!respuesta.ok) {
    //             const datos = Promise.reject(respuesta);
    //             console.log (datos);
    //         } else {
    //             const datos = respuesta.json();
    //             console.log (datos);
    //             router.replace('/admin/editarCriptos')
    //         }
    // })
=======
>>>>>>> 14ce431a87b8d116ca66825ec9423d0b6a03171d
    router.reload()
  }

  const colums: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 350},
        { field: 'nombre', headerName:'Nombre', width: 100 },
        { field: 'precio', headerName: 'Precio', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: ({row}) => (
              <>
                <Link href='/admin/editarCriptos' component={ NextLink }>
                  <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                </Link>
                <Link href='/admin/editarCriptos' component={ NextLink }>
                  <ClearIcon  sx={{ color: 'blue'}} onClick={() => onClick(row)}/>
                </Link>
              </>
            ) 
        }
  ];
  const rows = criptos;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Link href='/admin/anadirCripto' component={ NextLink }>
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