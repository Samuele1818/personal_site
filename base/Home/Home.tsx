import { NextPage } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import { useTranslation } from 'next-i18next'
import Section from '../../components/Section'
import Cover from '../../components/Cover'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'

const Home: NextPage = () => {
 const { t } = useTranslation('common')
 return (
  <BaseLayout title={t('common:home')}>
   <ScrollContainer>
    <Section>
     <Cover />
    </Section>
    <Section>
     <Cover />
    </Section>
    <Section>
     <Cover />
    </Section>
   </ScrollContainer>
  </BaseLayout>
 )
}

export default Home
