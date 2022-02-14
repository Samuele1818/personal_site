import { FC, ReactChild } from 'react'
import { useTranslation } from 'next-i18next'
import {
 Parallax,
 ParallaxLayer,
} from '@react-spring/parallax'

type Props = {}

type StickyProps = {
 title: string
 children: ReactChild
}

const Sticky: FC<StickyProps> = ({
 title,
 children,
}) => {
 return (
  <div className='w-8/12 absolute right-0 top-48'>
   <h6 className='text-sm text-electricViolet tracking-wide first-letter:uppercase'>
    {title}
   </h6>
   {children}
  </div>
 )
}

const Skills: FC<Props> = () => {
 const { t } = useTranslation('common')
 return (
  <section className='w-full py-24 px-8 lg:px-16 bg-electricViolet h-[1000px]'>
   <h1 className='mx-auto tracking-tight font-bold text-center leading-snug text-white text-4xl first-letter:uppercase'>
    {t('explore-my-skills')}
   </h1>
   <Parallax
    pages={3}
    className='parallax-container'>
    <ParallaxLayer sticky={{ start: 0, end: 1 }}>
     <Sticky title={t('programming')}>
      <p>Sticky 1</p>
     </Sticky>
    </ParallaxLayer>

    <ParallaxLayer
     offset={0}
     speed={0.5}
     className='w-4/12 absolute left-0 top-48'>
     <p>
      Not sticky 1
     </p>
    </ParallaxLayer>

    <ParallaxLayer
     offset={1.5}
     speed={1.5}
     className='w-4/12 absolute left-0 top-48'>
     <p>
      Not sticky 2
     </p>
    </ParallaxLayer>
   </Parallax>
  </section>
 )
}

export default Skills
