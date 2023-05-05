import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useNfts } from '../../hooks/useNfts';
import { NftsDetalles } from '../../componentes/nfts';
import { INft } from '../../interfaces/nft/INft';

interface Props {
    nft_: string
}

const NftPage = () => {
    const router = useRouter();
    const nft_ = router.query;
    const { nfts:nft, isLoading } = useNfts(`/nft/${nft_.id}`);

  return (
    <PublicLayouts> 
       <h2>Detalle del NFT {`${router.query.id}`} </h2>
        <NftsDetalles nft={nft} />
    </PublicLayouts>
    
  )
}

export default NftPage