import React, { FC, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import {
 HamburgerMenuIcon,
 ItalyIcon,
 LanguagesIcon,
 SSLogo,
 USAIcon,
} from '../../icons/icons'
import { useTranslation } from 'next-i18next'
import ToggleModeButton from '../ToggleModeButton'
import MenuWrapper from '../MenuWrapper/MenuWrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useToggle from '../../lib/useToggle'
import useOnClickOutside from '../../lib/useOnClickOutside'
import SideNav from './SideNav'
import { isDocumentDefined } from '../../utils/utils'

type MenuProps = {
 opened: boolean
}

export const Header: FC = () => {
 const { t } = useTranslation('common')
 const { route } = useRouter()
 const [
  isLanguageMenuOpened,
  toggleIsLanguageMenuOpened,
 ] = useToggle(false)
 const [sideNavMenu, toggleSideNavMenu] =
  useToggle(false)
 const languageMenuRef =
  useRef<HTMLDivElement>(null)

 const resetOnSideNavClose = (
  elem: HTMLElement
 ) => {
  document.body.style.overflowY = 'inherit'
  elem.style.overflowY = 'inherit'
  elem.style.marginLeft = '0'
  elem.style.transform = 'none'
  elem.style.borderRadius = '0'
 }

 const toggleSideNav = () => {
  toggleSideNavMenu()
  if (isDocumentDefined) {
   const elem: HTMLElement | null =
    document.getElementById('__next')
   if (elem) {
    if (sideNavMenu) resetOnSideNavClose(elem)
    else {
     document.body.style.overflowY = 'hidden'
     elem.style.overflowY = 'hidden'
     elem.style.marginLeft = '60vw'
     elem.style.borderRadius = '16px'
     elem.style.transform =
      'translateX(100px) translateY(20px) rotate(-5deg)'
    }
   }
  }
 }

 useOnClickOutside(
  languageMenuRef,
  () =>
   isLanguageMenuOpened &&
   toggleIsLanguageMenuOpened()
 )

 return (
  <div className='w-full px-16 absolute py-2 z-10'>
   <nav className='w-full inline-flex justify-between items-center'>
    <div className='inline-flex items-center'>
     <SSLogo className='hidden lg:block' />
     <HamburgerMenuIcon
      onMouseDown={() => toggleSideNav()}
      className='block lg:hidden cursor-pointer'
     />
     <SideNav opened={sideNavMenu} />
     <div className='hidden lg:inline-flex items-center'>
      <Link href='/home'>
       <a className='header-link'>
        {t('common:home')}
       </a>
      </Link>
      <Link href='/skills'>
       <a className='header-link'>
        {t('common:skills')}
       </a>
      </Link>
      <Link href='projects'>
       <a className='header-link'>
        {t('common:projects')}
       </a>
      </Link>
     </div>
    </div>
    <div className='inline-flex items-center'>
     <ToggleModeButton />
     <div
      ref={languageMenuRef}
      className='relative inline-flex items-center justify-center content-center'>
      <LanguagesIcon
       className='ml-4 cursor-pointer'
       onMouseDown={() =>
        toggleIsLanguageMenuOpened()
       }
      />
      <MenuWrapper isOpen={isLanguageMenuOpened}>
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
      </MenuWrapper>
     </div>
    </div>
   </nav>
  </div>
 )
}

export default Header
