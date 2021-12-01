import { FC } from 'react'

type Props = {}

const ScrollContainer: FC<Props> = ({
 children,
}) => {
 return (
  <div className='relative overflow-y-scroll scroll-snap-type-y-mandatory h-screen scroll-smooth'>
   {children}
  </div>
 )
}

export default ScrollContainer
