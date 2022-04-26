import { FC } from 'react'
import CTA from '../CTA'
import { useTranslation } from 'next-i18next'
import { CircleIcon } from '../../public/svg/icons/icons'

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
    alt={title}
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
  <div className='h-full w-full flex flex-col px-8 relative lg:flex-row lg:px-0 lg:pl-16 mt-s'>
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
    className={`hidden relative lg:block ${
     rtl ? 'right-1/3' : 'left-1/3'
    }`}>
    <img src={image} alt={title} />
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
