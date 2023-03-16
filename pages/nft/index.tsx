import { PublicLayouts } from '../../layouts/PublicLayouts';
import { NftsCardList } from '../../componentes/nfts';
import { useNfts } from '../../hooks/useNfts';

const IndexPage = () => {
  const { nfts, isLoading } = useNfts('/nft');
  console.log("l=", isLoading, "c=", nfts);

  return (
    <PublicLayouts>
      <h2>Sección de NFT</h2>
      <NftsCardList nfts = {nfts} />
    </PublicLayouts>
  )
}
export default IndexPage;