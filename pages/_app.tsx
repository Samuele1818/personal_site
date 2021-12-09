import '/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeContextProvider } from '../lib/ThemeProvider/ThemeProvider'

const MyApp = ({
 Component,
 pageProps,
}: AppProps) => (
 <ThemeContextProvider>
  <Component {...pageProps} />
 </ThemeContextProvider>
)

export default appWithTranslation(MyApp)
