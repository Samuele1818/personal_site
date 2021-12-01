import { FC } from 'react'
import { TriangleIcon } from '../../icons/icons'

type Props = {
 isOpen: boolean
}

const MenuWrapper: FC<Props> = ({
 children,
 isOpen,
}) => {
 return (
  <>
   {isOpen && (
    <ul className='menu absolute flex flex-col min-w-[100px]'>
     <TriangleIcon className='' />
     {children}
    </ul>
   )}
  </>
 )
}

export default MenuWrapper
