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
   className={`group bg-white dark:bg-background relative rounded-2xl w-[300px] h-[300px] ${className}`}>
   {children}
  </div>
 )
}

export default ProjectCard
