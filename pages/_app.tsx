import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

const MyApp = ({
 Component,
 pageProps,
}: AppProps) => {
 useEffect(() => {
  AOS.init({
   debounceDelay: 50,
   once: false,
   mirror: true,
  })
 }, [])
 return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
