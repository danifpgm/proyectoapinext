import { UsuarioDetalles } from "@/componentes/usuarios";
import { useUsuarios } from "@/hooks/useUsuarios";
import { useRouter } from "next/router";


interface Props {
    idUsuario: string
}

const UsuarioPagina = () => {
    const router = useRouter();
    console.log(router)
    const idUsuario = router.query;
    const { usuarios:usuario, isLoading } = useUsuarios(`/usuarios/${idUsuario.id}`);
    console.log(usuario)
  return (
        <UsuarioDetalles usuario = { usuario } />
  )
}

export default UsuarioPagina