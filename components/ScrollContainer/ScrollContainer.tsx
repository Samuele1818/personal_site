import { FC } from 'react'

type Props = {}

const ScrollContainer: FC<Props> = ({
 children,
}) => {
 return (
  <div className='relative overflow-y-scroll snap-mandatory snap-y h-screen'>
   {children}
  </div>
 )
}

export default ScrollContainer
