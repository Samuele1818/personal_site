import { FC } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

type Props = {
 title: string
}

const BaseLayout: FC<Props> = ({
 title,
 children,
}) => {
 return (
  <>
   <Head>
    <title>{title}</title>
   </Head>
   <Header />
   {children}
  </>
 )
}

export default BaseLayout
