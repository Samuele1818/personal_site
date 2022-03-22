import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({
 Component,
 pageProps,
}: AppProps) => <Component {...pageProps} />

export default appWithTranslation(MyApp)
