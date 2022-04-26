import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from "../modules/Home";

export default Home

export const getStaticProps = async ({
 // @ts-ignore
 locale,
}) => {
 return {
  props: {
   ...(await serverSideTranslations(locale, [
    'common',
   ])),
  },
 }
}
