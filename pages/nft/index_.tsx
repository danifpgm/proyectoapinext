import { NextPage } from "next"
import { PublicLayouts } from "../../layouts";
import { NftsLista } from "@/componentes/nfts";
import { useNfts } from "@/hooks/useNfts";
import { Mundo } from "@/componentes/comunes";

const indexPage_: NextPage = () => {

    const { nfts, isLoading } = useNfts('/nft');
    return (

    <PublicLayouts>
      <h1>NFT</h1>
      <NftsLista nfts={ nfts } />
    </PublicLayouts>

    )
}

export default indexPage_