import { NextPage } from "next"
import { PublicLayouts } from "../../layouts";
import { CriptosLista } from "@/componentes/criptos";
import { useCriptos } from "@/hooks/useCriptos";
import { Mundo } from "@/componentes/comunes";

const indexPage: NextPage = () => {

    const { criptos, isLoading } = useCriptos('/cripto');
    return (

    <PublicLayouts>
      <h1>Criptomonedas</h1>
      <CriptosLista criptos={ criptos } />
    </PublicLayouts>

    )
}

export default indexPage