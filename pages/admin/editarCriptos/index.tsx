import { NextPage } from "next"
import { AdminLayout } from "../../../layouts";
import { CriptosListaAdmin } from "@/componentes/comunes/admin/criptos/";
import { useCriptos } from "@/hooks/useCriptos";

const indexPage: NextPage = () => {

    const { criptos, isLoading } = useCriptos('/cripto');
    return (

    <AdminLayout>
      <h1>Editar Criptomonedas</h1>
      <CriptosListaAdmin criptos={ criptos } />
    </AdminLayout>

    )
}

export default indexPage