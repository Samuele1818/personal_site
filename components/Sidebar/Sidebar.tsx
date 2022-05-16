import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
 CodeSandBoxIcon,
 GithubIcon,
 LinkedinIcon,
} from '../../public/svg/icons/icons'

const Sidebar: FC = () => {
 const { t } = useTranslation('common')

 return (
  <nav
   id='sidebar'
   className='absolute h-full w-full z-1'>
   <div id='close-sidebar' className='scale-transition cursor-pointer absolute flex items-center justify-center mt-4 right-4 bg-black rounded-full w-12 h-12'>
    <span className='bg-white w-0.5 rounded-xl rotate-45 h-6 absolute block'/>
    <span className='bg-white w-0.5 rounded-xl h-6 -rotate-45 absolute block' />
   </div>
   <ul className='translate-x-[60%] mt-36 flex flex-col'>
    <li className='sidebar-li'>
     <Link href='/'>
      <a className='sidebar-link'>{t('home')}</a>
     </Link>
    </li>
    <li className='sidebar-li'>
     <Link href='#about-me'>
      <a className='sidebar-link'>
       {t('about-me')}
      </a>
     </Link>
    </li>
    <li className='sidebar-li'>
     <Link href='#projects'>
      <a className='sidebar-link'>
       {t('projects')}
      </a>
     </Link>
    </li>
    <li className='sidebar-li'>
     <div className='inline-flex mt-12 md:pb-12'>
      <LinkedinIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
      <GithubIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
      <CodeSandBoxIcon className='mr-4 fill-black cursor-pointer w-6 h-6' />
     </div>
    </li>
   </ul>
  </nav>
 )
}

export default Sidebar
