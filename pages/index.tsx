import Home from '../base/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default Home

export const getStaticProps = async ({
 // @ts-ignore
 locale,
}) => {
 return {
  props: {
   ...(await serverSideTranslations(
    locale,
    ['common']
   )),
  },
 }
}
