import { FC, ReactChild } from "react";

type Props = {
 className?: string
 children: ReactChild
}

const ProjectCard: FC<Props> = ({
 className,
 children,
}) => {
 return (
  <div
   className={`group bg-white dark:bg-background shadow-2xl dark:shadow-none relative ${className}`}>
   <div className='bg-white dark:bg-black group-hover:block absolute top-0 left-0 right-0 bottom-0 w-full h-full' />
   {children}
  </div>
 )
}

export default ProjectCard
