import { FC } from 'react'

type Props = {}

const Section: FC<Props> = ({
 children,
}) => {
 return (
  <section className='h-screen relative scroll-snap-align scroll-smooth'>
   {children}
  </section>
 )
}

export default Section
