import { NextPage } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import { useTranslation } from 'next-i18next'
import Cover from './Cover'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'
import Skills from './Skills'
import WhoAmI from './WhoAmI'
import Projects from './Projects'

const Home: NextPage = () => {
 const { t } = useTranslation('common')
 return (
  <BaseLayout title={t('common:home')}>
   <ScrollContainer>
    <Cover />
    <WhoAmI />
    <Skills />
    <Projects />
   </ScrollContainer>
  </BaseLayout>
 )
}

export default Home
