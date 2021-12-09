import Home from '../base/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default Home

export const getStaticProps = async ({
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
