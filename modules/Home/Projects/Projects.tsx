import { FC } from 'react'
import ProjectContainer from '../../../components/ProjectContainer'

type Props = {}

const ProjectsList = [
 {
  subTitle: 'API Site',
  title: 'First Project',
  text:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt et ut sed feugiat libero nulla. Tristique tristique neque blandit elit lorem laoreet. Sagittis platea sollicitudin nulla pharetra, ac vitae.',
  image: '/images/1-project.png',
  link: 'api',
 },
 {
  subTitle: 'TODO List',
  title: 'Second Project',
  text:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt et ut sed feugiat libero nulla. Tristique tristique neque blandit elit lorem laoreet. Sagittis platea sollicitudin nulla pharetra, ac vitae.',
  image: '/images/2-project.png ',
  link: 'todo',
 },
]

const Projects: FC<Props> = () => {
 return (
  <section
   id='projects'
   className='relative w-full mt-'>
   {ProjectsList.map((item, index) => (
    <ProjectContainer
     {...item}
     circle
     index={index}
     arraySize={ProjectsList.length}
    />
   ))}
  </section>
 )
}

export default Projects
