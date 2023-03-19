import { NextPage } from "next"
import { PublicLayouts } from "../../../layouts";
import { CriptosListaAdmin } from "@/componentes/comunes/admin/criptos/";
import { useCriptos } from "@/hooks/useCriptos";

const indexPage: NextPage = () => {

    const { criptos, isLoading } = useCriptos('/cripto');
    return (

    <PublicLayouts>
      <h1>Editar Criptomonedas</h1>
      <CriptosListaAdmin criptos={ criptos } />
    </PublicLayouts>

    )
}

export default indexPage