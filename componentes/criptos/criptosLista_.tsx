import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICripto } from '@/interfaces';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';

interface Props {
    criptos: ICripto[]
}
export const CriptosLista_:FC<Props> = ({ criptos }) => {
    const colums: GridColDef[] = [
        { field: 'id', headerName: 'ISBN', width: 130},
        { field: 'nombre', headerName:'Nombre', width: 300 },
        { field: 'precio', headerName: 'Precio', width: 100 },
        { field: 'usuarios', headerName: 'Usuarios', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: () => (
              <>
                <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                <ClearIcon  sx={{ color: 'blue'}} />
              </>
            ) 
        }
  ];
  const rows = criptos;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
              </Box>
               
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

