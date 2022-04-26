import { FC } from 'react'
import Link from 'next/link'
import {
 CodeSandBoxIcon,
 GithubIcon,
 HamburgerMenuIcon,
 LinkedinIcon,
} from '../../public/svg/icons/icons'
import { useTranslation } from 'next-i18next'

type Props = {}

const Header: FC<Props> = () => {
 const { t } = useTranslation('common')
 return (
  <header className='z-10 absolute inline-flex justify-between items-center w-full'>
   <div className='px-8 lg:pl-16 lg:pr-4 h-full py-4 w-full md:w-[70%] lg:w-[52%] inline-flex items-center justify-between'>
    <h1 className='text-lavenderRose text-lg font-light'>
     Samuele Sciatore
    </h1>
    <HamburgerMenuIcon className='md:hidden cursor-pointer text-white fill-current' />
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
