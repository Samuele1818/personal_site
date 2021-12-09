import { FC } from 'react'

type Props = {
 className?: string
}

const Section: FC<Props> = ({
 children,
 className,
}) => {
 return (
  <section
   className={`h-screen relative scroll-snap-align scroll-smooth pt-24 px-16 ${className}`}>
   <div className='w-full min-h-full flex'>
    {children}
   </div>
  </section>
 )
}

export default Section
