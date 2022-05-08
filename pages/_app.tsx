import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect, useLayoutEffect, useState } from "react";
import AOS from "aos";
import Spinner from "../components/Spinner";
import useToggle from "../lib/useToggle";

const MyApp = ({
 Component,
 pageProps,
}: AppProps) => {
 const [isLoading, toggleLoading] = useToggle(true)
 useEffect(() => {
  AOS.init({
   debounceDelay: 50,
   once: false,
   mirror: true,
  })
 }, [])
 
 useLayoutEffect(() => {
  if(typeof window != "undefined") toggleLoading(false)
 }, [])
 
 return isLoading ? <Spinner /> : <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
