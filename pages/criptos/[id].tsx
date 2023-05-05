import { useRouter } from "next/router";
import { PublicLayouts } from "../../layouts";
import { CriptosDetalles } from "@/componentes/criptos/criptosDetalles";
import { useCriptos } from "@/hooks/useCriptos";


interface Props {
    idCripto: string
}

const CriptoPagina = () => {
    const router = useRouter();
    console.log(router)
    const idCripto = router.query;
    const { criptos:cripto, isLoading } = useCriptos(`/cripto/${idCripto.id}`);
    console.log(cripto)
  return (
    <PublicLayouts>
        <CriptosDetalles cripto = { cripto } />
    </PublicLayouts>
  )
}

export default CriptoPagina