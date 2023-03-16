import { Grid } from "@mui/material";
import { FC } from "react"
import { NftCard } from "./";
import { INft } from '../../interfaces/nft/INft';

interface Props {
    nfts: INft[]
}
export const NftsCardList:FC<Props> = ({ nfts }) => {
  return (
    <Grid container spacing={3} sx={{ backgroundColor: 'white' }}>
      {
        nfts.map( (nft ) => (
          <NftCard 
            nft = { nft }
            key = { nft.id }
          />
        ))
      }
    </Grid>
  )
}