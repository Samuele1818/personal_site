import React, {
 FC,
 useEffect,
 useRef,
} from 'react'
import { isDocumentDefined } from '../../../utils/utils'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import {
 HomeIcon,
 ItalyIcon,
 ProjectsIcon,
 SkillsIcon,
 SSLogo,
 USAIcon,
} from '../../../icons/icons'
import { useRouter } from 'next/router'

type Props = {
 opened: boolean
}

const SideNav: FC<Props> = ({ opened }) => {
 const ref = useRef<HTMLDivElement>(null)
 const { route } = useRouter()
 const { t } = useTranslation('common')

 useEffect(() => {
  if (ref.current)
   if (opened) ref.current.style.width = '60vw'
   else ref.current.style.width = '0'
 }, [opened])

 if (!isDocumentDefined) return null

 return createPortal(
  <nav
   ref={ref}
   className='w-0 fixed top-0 left-0 transition-all duration-[.4s] h-screen lg:hidden flex flex-col mt-6 ml-12 md:ml-24'>
   <div className='inline-flex items-center p-4'>
    <SSLogo className='w-8 h-8' />
    <h1 className='ml-2'>Samuele.</h1>
   </div>
   <Link href='/home'>
    <a className='sidenav-row'>
     <HomeIcon />
     {t('common:home')}
    </a>
   </Link>
   <Link href='/skills'>
    <a className='sidenav-row'>
     <SkillsIcon />
     {t('common:skills')}
    </a>
   </Link>
   <Link href='projects'>
    <a className='sidenav-row'>
     <ProjectsIcon />
     {t('common:projects')}
    </a>
   </Link>
   <div className='block md:hidden'>
    <Link href={route} locale='en'>
     <Link href={route} locale='en'>
      <a className='menu-row'>
       <USAIcon />
       <p>{t('common:english')}</p>
      </a>
     </Link>
    </Link>
    <Link href={route} locale='it'>
     <a className='menu-row'>
      <ItalyIcon />
      <p>{t('common:italian')}</p>
     </a>
    </Link>
   </div>
  </nav>,
  // @ts-ignore
  document.getElementById('side-nav')
 )
}

export default SideNav
