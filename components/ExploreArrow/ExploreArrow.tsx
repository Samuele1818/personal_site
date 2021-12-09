import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { NextArrowIcon } from '../../icons/icons'

type Props = {
 link: string
}

const ExploreArrow: FC<Props> = ({ link }) => {
 const { t } = useTranslation('common')
 return (
  <Link href={link}>
   <a
    className='
    text-medium-purple
    inline-flex
    items-center
    uppercase
    group
    '>
    {t('common:explore')}
    <NextArrowIcon className='group-hover:translate-x-2 dark:text-medium-purple text-medium-purple fill-current transition-transform' />
   </a>
  </Link>
 )
}

export default ExploreArrow
