import { FC } from 'react'
import TypeIllustration from '../../../public/svg/TypeIllustration'
import { useTranslation } from 'next-i18next'
import { a, useSpring } from 'react-spring'

const AboutMe: FC = () => {
 const { t } = useTranslation('common')
 const [{ xy }, set] = useSpring(() => ({
  xy: [0, 0],
   config: {
    velocity: 10,
     bounce: true
   }
 }))

 const onMove = ({ clientX: x, clientY: y }) => {
  set({ xy: [x / 30, y/ 30] })
 }

 const posAnimation = xy.to(
  (x, y) => `translate(${x}px,${y}px)`
 )

 return (
  <section
   onMouseMove={onMove}
   id='about-me'
   className='relative w-full mt-s flex flex-col px-8 lg:px-16 md:justify-between md:inline-flex md:flex-row'>
   <div className='flex flex-col md:w-7/12 md:mt-[8%]'>
    <h6 className='sm-header z-10'>
     {t('about-me')}
    </h6>
    <h1 className='lg-header z-10'>
     {t('about-me-title')}
    </h1>
    <p className='hidden max-w-xs md:block sm-text mt-6 z-10'>
     {t('about-me-text')}
    </p>
   </div>
   <a.div
    style={{
     transform: posAnimation,
    }}
    className='z-10 w-full h-fit -mt-[10%] md:w-5/12 md:mt-0'>
    <TypeIllustration />
   </a.div>
   <p className='md:hidden w-full sm-text mt-6 z-10'>
    {t('about-me-text')}
   </p>
  </section>
 )
}

export default AboutMe
