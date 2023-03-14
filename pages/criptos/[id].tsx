import { useRouter } from "next/router";
import { PublicLayouts } from "../../layouts";
import { CriptosDetalles } from "@/componentes/criptos/criptosDetalles";
import { useCriptos } from "@/hooks/useCriptos";


interface Props {
    idCripto: string
}

const UsuarioPagina = () => {
    const router = useRouter();
    console.log(router)
    const idCripto = router.query;
    const { criptos:cripto, isLoading } = useCriptos(`/cripto/${idCripto.id}`);
    console.log(cripto)
  return (
    <PublicLayouts>
        <h1>Detalle de cripto {`${router.query.id}`}</h1>
        <CriptosDetalles cripto = { cripto } />
    </PublicLayouts>
    
  )
}

export default UsuarioPagina