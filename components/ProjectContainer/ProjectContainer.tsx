import { FC } from 'react'
import CTA from '../CTA'
import { useTranslation } from 'next-i18next'
import { CircleIcon } from '../../public/icons/icons'
import ProjectsCurvedLine from '../../public/svg/ProjectsCurvedLine'

type Props = {
 image: string
 subTitle: string
 title: string
 text: string
 link: string
 rtl?: boolean
 index?: number
 circle?: boolean
 arraySize?: number
}

type TextProps = {
 subTitle: string
 title: string
 text: string
 link: string
 image: string
 rtl?: boolean
}

const Text: FC<TextProps> = ({
 subTitle,
 title,
 text,
 link,
 image,
 rtl,
}) => {
 const { t } = useTranslation('common')

 return (
  <div
   className={`mt-16 ${
    rtl && 'lg:ml-auto lg:mr-[10%]'
   } z-20`}>
   <h6 className='sm-header'>{subTitle}</h6>
   <h1 className='lg-header'>{title}</h1>
   <img
    src={image}
    className='w-full h-[50%] mt-2 lg:hidden'
   />
   <p className='mt-8 sm-text lg:max-w-sm break-words whitespace-normal'>
    {text}
   </p>
   <CTA
    className='mt-6'
    text={t('case-study')}
    link={link}
   />
  </div>
 )
}

const ProjectContainer: FC<Props> = ({
 image,
 subTitle,
 title,
 text,
 rtl,
 link,
 index,
 circle,
 arraySize,
}) => {
 const { t } = useTranslation('common')
 const isLastElement = index === arraySize! - 1
  return (
  <div className='h-full flex flex-col lg:flex-row inline-flex relative w-full px-8 lg:px-16'>
   {circle && (
    <div className='w-16 h-16 mt-16 mr-24 relative flex hidden lg:block'>
     <line
      className={`w-0.5 ${
       isLastElement ? 'h-[28rem]' : 'h-screen'
      } bg-black ml-auto mr-auto absolute left-0 right-0`}
     />
     <CircleIcon
      className='w-16 h-16 bg-white absolute z-20'
       // @ts-ignore
      foreignObject={
       <p className='text-black text-4xl w-full h-full flex justify-center content-center items-center'>
        {index! + 1}
       </p>
      }
     />
    </div>
   )}
{/*   {isLastElement && (
    <>
     <ProjectsCurvedLine
      width='100px'
      height='150px'
      className='absolute bottom-36 left-24 hidden lg:block'
     />
     <p className='hidden lg:block text-electricViolet absolute bottom-16'>{t('four-new-ideas')}</p>
     <p className='hidden lg:block text-electricViolet absolute bottom-24 left-44'>{t('100-percent-energy')}</p>
    </>
   )}*/}
   {!rtl && (
    <Text
     subTitle={subTitle}
     title={title}
     text={text}
     image={image}
     link={link}
    />
   )}
   <div
    className={`hidden lg:block absolute ${
     rtl ? '-left-[40%]' : '-right-[40%]'
    }`}>
    <img src={image} />
   </div>
   {rtl && (
    <Text
     subTitle={subTitle}
     title={title}
     text={text}
     link={link}
     image={image}
     rtl={rtl}
    />
   )}
  </div>
 )
}

export default ProjectContainer
