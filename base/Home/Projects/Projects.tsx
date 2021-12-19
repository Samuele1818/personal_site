import { FC } from 'react'
import Section from '../../../components/Section'
import { useTranslation } from 'next-i18next'
import ProjectCard from '../../../components/ProjectCard'
import ProjectsRight from '/public/svg/ProjectsRight.svg'
import TextWrapper from "../../../components/TextWrapper";

type Props = {}

const Projects: FC<Props> = () => {
 const { t } = useTranslation(['common', 'projects'])
 return (
  <Section className='bg-white dark:bg-black'>
   <section className='flex flex-col'>
     <TextWrapper title={t('projects:projects')} text={t('projects:projects-text')} link='/projects' />
   </section>
   <section className='grid grid-cols-2 grid-rows-2 gap-4'>
    <ProjectCard>
     <p>AOH BUSINESS</p>
    </ProjectCard>
    <ProjectCard>
      <p>AOH BUSINESS</p>
    </ProjectCard>
    <ProjectCard>
      <p>AOH BUSINESS</p>
    </ProjectCard>
    <ProjectCard>
     <p>AOH BUSINESS</p>
    </ProjectCard>
   </section>
    <ProjectsRight className='absolute right-0 top-0 bottom-0 max-h-screen z-[0]' />
  </Section>
 )
}

export default Projects
