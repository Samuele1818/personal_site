import { FC } from 'react'
import Section from '../../../components/Section'
import { useTranslation } from 'next-i18next'
import ExploreArrow from '../../../components/ExploreArrow'
import SkillsTop from '/public/svg/SkillsTop.svg'
import TextWrapper from '../../../components/TextWrapper'

type Props = {}

const Skills: FC<Props> = () => {
 const { t } = useTranslation(['common', 'skills'])
 return (
  <Section className='bg-white dark:bg-black'>
   <section className='flex flex-col w-1/2'>
    <TextWrapper
     title={t('skills:skills')}
     text={t('skills:skills-text')}
     link='/skills'
    />
   </section>
   <SkillsTop className='absolute top-0 right-0 left-0 max-w-screen z-[0]' />
  </Section>
 )
}

export default Skills
