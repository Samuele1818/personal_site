import { FC } from 'react'
import Section from '../../../components/Section'
import { useTranslation } from 'next-i18next'

type Props = {}

const Projects: FC<Props> = () => {
 const { t } = useTranslation(['common', 'cover'])
 return (
  <Section className='bg-white dark:bg-background'>
   <section className='flex flex-col'>
    <h1>{t('common:projects')}</h1>
    <p>{t('cover:projects-text')}</p>
   </section>
   <section></section>
  </Section>
 )
}

export default Projects
