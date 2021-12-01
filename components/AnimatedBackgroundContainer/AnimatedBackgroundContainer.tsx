import {
 FC,
 ReactChildren,
 ReactNode,
 useEffect,
} from 'react'

type Props = {
 customItem?: ReactNode
 children?: ReactChildren
}

const AnimatedBackgroundContainer: FC<Props> =
 ({ customItem, children }) => {
  const item = customItem || (
   <div className='rounded-lgx2 w' />
  )

  useEffect(() => {}, [])

  return (
   <div className='relative w-full h-full'>
    {children}
   </div>
  )
 }

export default AnimatedBackgroundContainer
