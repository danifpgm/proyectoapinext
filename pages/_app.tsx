import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, nightTheme } from '../temas';
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init ) => 
          fetch(resource, init ).then( res => res.json ())
      }}
    >
        <ThemeProvider theme={ nightTheme } >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
    
  )
}
