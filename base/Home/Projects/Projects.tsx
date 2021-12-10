import { FC } from 'react'
import Section from '../../../components/Section'
import { useTranslation } from 'next-i18next'
import ProjectCard from "../../../components/ProjectCard";

type Props = {}

const Projects: FC<Props> = () => {
 const { t } = useTranslation(['common', 'cover'])
 return (
  <Section className='bg-white dark:bg-background'>
   <section className='flex flex-col'>
    <h1>{t('common:projects')}</h1>
    <p>{t('cover:projects-text')}</p>
   </section>
   <section>
     <ProjectCard>
       <img width='300' height='300' src='https://source.unsplash.com/random/1080x720/?wallpaper' />
     </ProjectCard>
   </section>
  </Section>
 )
}

export default Projects
