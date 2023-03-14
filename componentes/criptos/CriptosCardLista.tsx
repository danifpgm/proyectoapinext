import { Grid } from "@mui/material";
import { FC } from "react"
import { CriptoCard } from "./CriptoCard";
import { ICripto } from "@/interfaces";

interface Props {
    criptos: ICripto[]
}
export const CriptosCardList:FC<Props> = ({ criptos }) => {
  return (
    <Grid container spacing={4}>
      {
        criptos.map( ( cripto ) => (
          <CriptoCard 
            cripto = { cripto }
            key = { cripto.id }
          />
        ))
      }

    </Grid>
  )
}