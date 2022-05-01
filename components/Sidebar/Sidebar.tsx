import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Sidebar: FC = () => {
  const { t } = useTranslation('common')
  
  return (
    <nav id='sidebar' className='pl-4'>
      <ul className='flex flex-col'>
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
  );
};

export default Sidebar;
