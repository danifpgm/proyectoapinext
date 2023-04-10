import { NextPage } from "next"
import { AdminLayout } from "@/layouts";
import NextLink from 'next/link';
import { Button, Link } from "@mui/material";


const indexPage: NextPage = () => {
  return (
    <AdminLayout>
      <h1>Admin</h1>
      <Link href='/admin/editarCriptos' component={ NextLink }>
        <Button sx={{ backgroundColor: 'black', color: 'white'}}>Editar criptos</Button>
      </Link>
    </AdminLayout>
  )
}
export default indexPage