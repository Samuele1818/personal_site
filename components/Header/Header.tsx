import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import {
 CodeSandBoxIcon,
 GithubIcon,
 HamburgerMenuIcon,
 LinkedinIcon,
} from '../../public/svg/icons/icons'
import { useTranslation } from 'next-i18next'

const Header: FC = () => {
 const { t } = useTranslation('common')

 const [isSidebar, toggleSidebar] =
  useState<boolean>(false)

 useEffect(() => {
  const element =
   document.getElementById('__next')
  const el = document.getElementById('sidebar')
  if (element && el) {
   el.style.display = isSidebar ? 'block' : 'none'
   element.style.transform = isSidebar
    ? 'scaleY(0.8)'
    : ''
   element.style.left = isSidebar ? '60%' : '0'
   
   document.documentElement.style.overflow =
    isSidebar ? 'hidden' : 'auto'
  }
 }, [isSidebar])

 // https://stackoverflow.com/questions/60540985/react-usestate-doesnt-update-in-window-events
 const mouseDownListener = (e: Event) => {
  // Fix typescript error "Property 'id' does not exist on type 'EventTarget'"
  const t = e.target as HTMLDivElement
  toggleSidebar((isSidebar) => {
   // if clicked item is the toggle button, open sidebar
   if (t == null) return false
   if (t.id == 'sidebar-toggle') return true
   // if clicked item id differ from 'sidebar' and sidebar is open, close it
   return isSidebar && t.id == 'sidebar'
  })
 }

 const resizeListener = () => {
  if (window.outerWidth >= 768) toggleSidebar(false)
 }

 useEffect(() => {
  document.addEventListener(
   'mousedown',
   mouseDownListener
  )
  window.addEventListener(
   'resize',
   resizeListener,
    true
  )
  return () => {
   document.removeEventListener(
    'mousedown',
     mouseDownListener
   )
   window.removeEventListener(
    'resize',
    resizeListener
   )
  }
 }, [])

 return (
  <header className='z-10 absolute inline-flex justify-between items-center w-full'>
   <div className='px-8 lg:pl-16 lg:pr-4 h-full py-4 w-full md:w-[70%] lg:w-[52%] inline-flex items-center justify-between'>
    <h1 className='text-lavenderRose text-lg font-light'>
     Samuele Sciatore
    </h1>
    <HamburgerMenuIcon
     id='sidebar-toggle'
     className='md:hidden cursor-pointer w-4 h-4 text-white fill-current'
    />
    <nav className='hidden md:inline-block'>
     <ul className='inline-flex items-center'>
      <li>
       <Link href='/'>
        <a className='text-white text-sm mr-4 first-letter:uppercase font-light'>
         {t('home')}
        </a>
       </Link>
      </li>
      <li>
       <Link href='#about-me'>
        <a className='text-white text-sm mr-4 first-letter:uppercase font-light'>
         {t('about-me')}
        </a>
       </Link>
      </li>
      <li>
       <Link href='#projects'>
        <a className='text-white text-sm mr-4 first-letter:uppercase font-light'>
         {t('projects')}
        </a>
       </Link>
      </li>
     </ul>
    </nav>
   </div>
   <div className='hidden md:inline-flex md:px-8 md-w-[48%] lg:px-16 h-full py-4 items-center'>
    <LinkedinIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
    <GithubIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
    <CodeSandBoxIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
   </div>
  </header>
 )
}

export default Header
