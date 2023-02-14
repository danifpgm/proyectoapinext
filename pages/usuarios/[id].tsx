import { useRouter } from "next/router";
import { FC } from "react"
import { PublicLayouts } from "../../layouts";


interface Props {
    usuario: string
}

const UsuarioPagina = () => {
    const router = useRouter();
    const usuario = router.query;
    console.log(usuario)
  return (
    <PublicLayouts>
        <h1>Detalle del Usuario { usuario.id}</h1>
    </PublicLayouts>
    
  )
}

export default UsuarioPagina