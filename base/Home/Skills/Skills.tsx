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
  <div id='skills' className='relative mt-s w-full h-screen'>
   <Parallax
    pages={3.5}
    className='bg-electricViolet'>
    <ParallaxLayer offset={0}>
     <h1 className='mx-auto tracking-tight font-bold text-center leading-snug text-white text-4xl first-letter:uppercase'>
      {t('explore-my-skills')}
     </h1>
    </ParallaxLayer>
     <ParallaxLayer sticky={{ start: 0, end: 2.5 }}>
      <div className='w-12 h-12 bg-white absolute top-1/2 right-24'></div>
     </ParallaxLayer>
     <ParallaxLayer  speed={0.2} offset={0.8}>
      <p className='absolute top-1/2 left-24'>
       Scroll 1
      </p>
     </ParallaxLayer>
     <ParallaxLayer speed={0.2} offset={1.6}>
      <p className='absolute top-1/2 left-24'>
       Scroll 2
      </p>
     </ParallaxLayer>
     <ParallaxLayer speed={0.2} offset={2.4}>
      <p className='absolute top-1/2 left-24'>
       Scroll 3
      </p>
     </ParallaxLayer>
   </Parallax>
  </div>
 )
}

export default Skills
