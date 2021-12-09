import { FC } from 'react'

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
     {children}
    </ul>
   )}
  </>
 )
}

export default MenuWrapper
