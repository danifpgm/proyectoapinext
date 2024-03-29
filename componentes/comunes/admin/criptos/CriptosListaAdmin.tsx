import { Box, Grid, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { ICripto } from '@/interfaces/cripto/ICripto';
import NextLink from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import router, { useRouter } from 'next/router';
interface Props {
  criptos: ICripto[]
}
export const CriptosListaAdmin:FC<Props> = ({ criptos }) => {
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
    router.reload()
  }

  const colums: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 350},
        { field: 'nombre', headerName:'Nombre', width: 170 },
        { field: 'precio', headerName: 'Precio', width: 170 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: ({row}) => (
              <>
                <Link href='/admin' component={ NextLink }>
                  <ModeEditOutlineTwoToneIcon sx={{ color: 'blue'}} />
                </Link>
                <Link href='/admin' component={ NextLink }>
                  <ClearIcon  sx={{ color: 'red'}} onClick={() => onClick(row)}/>
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