import { FC } from 'react'
import TypeIllustration from '../../../public/svg/TypeIllustration'
import { useTranslation } from 'next-i18next'

const AboutMe: FC = () => {
 const { t } = useTranslation('common')
 return (
  <section
   id='about-me'
   className='w-full mt-s flex flex-col px-8 lg:px-16 md:justify-between md:inline-flex md:flex-row'>
   <div className='flex flex-col md:w-7/12 md:mt-[8%]'>
    <h6 className='sm-header'>{t('about-me')}</h6>
    <h1 className='lg-header'>
     {t('about-me-title')}
    </h1>
    <p className='hidden max-w-xs md:block sm-text mt-6'>
     {t('about-me-text')}
    </p>
   </div>
   <TypeIllustration className='w-full h-fit -mt-[10%] md:w-5/12 md:mt-0' />
   <p className='md:hidden w-full sm-text mt-6'>
    {t('about-me-text')}
   </p>
  </section>
 )
}

export default AboutMe
