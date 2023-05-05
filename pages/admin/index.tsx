import { NextPage } from "next"
import { AdminLayout } from "@/layouts";
import { UsuariosListaAdmin } from "@/componentes/comunes/admin/usuarios";

import { CriptosListaAdmin } from "@/componentes/comunes/admin/criptos/";
import { useCriptos } from "@/hooks/useCriptos";
import { useUsuarios } from "@/hooks/useUsuarios";
import NextLink from 'next/link';
import { Button, Link } from "@mui/material";
const indexPage: NextPage = () => {
  const { criptos, isLoading } = useCriptos('/cripto');
  const { usuarios } = useUsuarios('/usuarios');

  return (
    <AdminLayout>
      <h1>Admin</h1>
      <h2>Editar Usuarios</h2>
      <UsuariosListaAdmin usuarios={ usuarios } />
      <h2>Editar Criptomonedas</h2>
      <CriptosListaAdmin criptos={ criptos } />
    </AdminLayout>
  )
}
export default indexPage