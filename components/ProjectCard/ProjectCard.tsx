import { FC } from 'react'

type Props = {
 className?: string
}

const ProjectCard: FC<Props> = ({
 className,
}) => {
 return <div className={`${className} bg-`}></div>
}

export default ProjectCard
