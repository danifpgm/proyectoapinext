import { NextPage } from "next"
import { MainLayouts } from '../../layouts/MainLayouts';
import NextLink from 'next/link';
import { Button, Link } from "@mui/material";


const indexPage: NextPage = () => {
  return (
    <MainLayouts>
      <h1>Admin</h1>
      <Link href='/admin/editarCriptos' component={ NextLink }>
        <Button sx={{ backgroundColor: 'black', color: 'white'}}>Editar criptos</Button>
      </Link>
    </MainLayouts>
  )
}
export default indexPage