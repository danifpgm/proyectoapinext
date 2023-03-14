import { NextPage } from "next"
import { PublicLayouts } from "../../layouts";
import { UsuariosLista } from "@/componentes/usuarios";
import { useUsuarios } from "@/hooks/useUsuarios";

const indexPage: NextPage = () => {

    const { usuarios, isLoading } = useUsuarios('/usuarios');
    return (

    <PublicLayouts>
      <h1>Usuarios</h1>
      <UsuariosLista usuarios={ usuarios } />
    </PublicLayouts>

    )
}

export default indexPage