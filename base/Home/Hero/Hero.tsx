import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { ScrollDownIcon } from '../../../public/icons/icons'
import MacMockup from '../../../public/svg/MacMockup'
import Editor from "../../../components/MonacoEditor/MonacoEditor";

type Props = {}

const Hero: FC<Props> = () => {
 const { t } = useTranslation('common')
 return (
  <section id='hero' className='w-full height md:inline-flex relative'>
   <div className='flex flex-col w-full h-full bg-electricViolet md:rounded-br-md lg:w-[52%] pt-32 px-8 lg:px-16'>
    <h1 className='tracking-tight max-w-[300px] mx-auto md:mx-0 font-bold text-center leading-snug md:text-left text-white text-4xl first-letter:uppercase'>
     {t('solve-your-problems')}
    </h1>
    <a href='#best-project' className='inline-flex cursor-pointer items-center my-8 mx-auto md:mx-0'>
     <ScrollDownIcon className='w-8 h-8' />
     <p className='ml-4 font-medium text-lavenderRose first-letter:uppercase'>
      {t('scroll-down')}
     </p>
    </a>
   </div>
   <MacMockup className='md:hidden absolute w-[80%] top-[60%] h-fit mx-auto left-10 right-0' />
   <div className='hidden md:block relative w-[48%]'>
    <svg
     width={121}
     height={171}
     fill='none'
     className='absolute -left-[60px] top-1/4 hidden lg:block'>
     <path
      d='M50 135.545l35.355-35.405 35.356 35.405-35.356 35.404L50 135.545zM50 35.405L85.355 0l35.356 35.405-35.356 35.404L50 35.405z'
      fill='#60F'
     />
     <path
      fill='#FF9BFF'
      fillOpacity={0.5}
      d='M0 85.475L35.355 50.07l35.356 35.405-35.356 35.404z'
     />
    </svg>
    <MacMockup className='absolute top-[20%] md:-left-[160px] md:w-[100%] lg:left-[20px] lg:w-[60%] mx-auto h-fit' />
   </div>
  </section>
 )
}

export default Hero
