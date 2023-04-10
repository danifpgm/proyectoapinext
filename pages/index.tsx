import { NextPage } from "next"
import { PublicLayouts } from "../layouts";
import CriptoApi from "@/componentes/criptos/CriptoApi";

const indexPage: NextPage = () => {
  
  return (
    <PublicLayouts>
      <h1>Proyecto Api </h1>
      <h3>Datos sobre criptomonedas en tiempo real proporcionados por CoinGecko</h3>
      <CriptoApi />
    </PublicLayouts>
  )
}

export default indexPage