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
    <ul className='menu'>
     {children}
    </ul>
   )}
  </>
 )
}

export default MenuWrapper
