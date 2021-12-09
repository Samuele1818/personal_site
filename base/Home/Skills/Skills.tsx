import { FC } from 'react'
import Section from '../../../components/Section'
import {
 CPPIcon,
 JavaIcon,
 JSIcon,
 KotlinIcon,
 MongoDBIcon,
 NextJSIcon,
 NodeJSIcon,
 ReactIcon,
 TSIcon,
} from '../../../icons/icons'
import { useTranslation } from 'next-i18next'
import ExploreArrow from '../../../components/ExploreArrow'

type Props = {}

const Skills: FC<Props> = () => {
 const { t } = useTranslation(['common', 'cover'])
 return (
  <Section className='bg-white dark:bg-background'>
   <section className='grid grid-cols-3 grid-rows-3 w-1/2'>
    <JSIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <TSIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <NodeJSIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <ReactIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <NextJSIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <MongoDBIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <KotlinIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <CPPIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
    <JavaIcon className='sm:w-8 sm:h-8 lg:w-16 lg:h-16' />
   </section>
   <section className='flex flex-col w-1/2'>
    {/*<h1>{t('common:skills')}</h1>*/}
    <h1 className='tracking-tight'>
     Cosmonauts malfunction with alarm!
    </h1>
    <p className='text-ship-gray text-opacity-80 font-light'>
     To the shredded raspberries add pickles,
     okra, sweet chili sauce and ground peanut
     butter.Advice, solitude and a meaningless
     heavens of ascension.Plasmators assimilant in
     festus quadrata!Amicitias ire!
    </p>
    {/*<p>{t('cover:skills-text')}</p>*/}
    <ExploreArrow link='/' />
   </section>
  </Section>
 )
}

export default Skills
