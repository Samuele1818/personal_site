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
   className={`h-screen relative snap-start pt-24 px-16 w-full min-h-full flex ${className}`}>
   {children}
  </section>
 )
}

export default Section
