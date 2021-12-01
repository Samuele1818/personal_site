import { FC, useRef } from 'react'
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

type Props = {}

export const Header: FC<Props> = () => {
 const { t } = useTranslation('common')
 const { route } = useRouter()
 const [
  isMenuOpened,
  toggleIsMenuOpened,
 ] = useToggle(false)
 const menuRef =
  useRef<HTMLDivElement>(null)

 useOnClickOutside(
  menuRef,
  () =>
   isMenuOpened && toggleIsMenuOpened()
 )

 return (
  <div className='w-full md:px-16 absolute py-2 z-10'>
   <nav className='w-full inline-flex justify-between items-center'>
    <div className='inline-flex items-center'>
     <SSLogo />
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
    <div className='hidden lg:inline-flex items-center'>
     <ToggleModeButton />
     <div
      ref={menuRef}
      className='relative inline-flex items-center justify-center content-center'>
      <LanguagesIcon
       className='ml-4'
       onMouseDown={() =>
        toggleIsMenuOpened()
       }
      />
      <MenuWrapper
       isOpen={isMenuOpened}>
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
    <HamburgerMenuIcon className='block lg:hidden mr-4 ml-auto' />
   </nav>
  </div>
 )
}

export default Header
