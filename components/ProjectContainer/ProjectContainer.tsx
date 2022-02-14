import { FC } from 'react'
import CTA from '../CTA'
import { useTranslation } from 'next-i18next'
import { CircleIcon } from '../../public/icons/icons'

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
    rtl && 'ml-auto mr-[25%]'
   } z-20`}>
   <h6 className='sm-header'>{subTitle}</h6>
   <h1 className='lg-header'>{title}</h1>
   <img
    src={image}
    className='w-full h-16 mt-2 lg:hidden'
   />
   <p className='mt-8 sm-text max-w-sm break-words whitespace-normal'>
    {text}
   </p>
   <CTA
    classNames='mt-6'
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
 return (
  <div className='flex flex-col lg:flex-row lg:inline-flex relative w-full h-screen'>
   {circle && (
    <div className='w-16 h-16 mt-16 mr-24 relative flex hidden lg:block'>
     <line
      className={`w-0.5 ${
       index === arraySize - 1
        ? 'h-52'
        : 'h-screen'
      } bg-black ml-auto mr-auto absolute left-0 right-0`}
     />
     <CircleIcon
      className='w-16 h-16 bg-white absolute z-20'
      foreignObject={
       <p className='text-black text-4xl w-full h-full flex justify-center content-center items-center'>
        {index + 1}
       </p>
      }
     />
    </div>
   )}
   {index === arraySize - 1 && (
    <img
     className='w-64 h-60 absolute -left-[12px] bottom-[25%] hidden lg:block'
     src='/images/line-curved.png'
    />
   )}
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
