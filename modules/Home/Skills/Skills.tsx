import { FC } from 'react'
import LanguagesAndTechnologies from '../../../public/svg/LanguagesAndTechnologies'
import PersonalSkills from '../../../public/svg/PersonalSkills'

const Skills: FC = () => {
 return (
  <div className='w-full mt-s relative'>
   <h1 className='tracking-tight mx-auto font-bold text-center leading-snug text-black text-4xl first-letter:uppercase'>
    Skills
   </h1>
   <div className='flex flex-col lg:flex-row w-full'>
    <LanguagesAndTechnologies className='w-full h-full lg:w-[60%] lg:left-[45%] lg:bottom-0' />
    <PersonalSkills className='w-full h-full lg:w-[40%] lg:h-[80%]' />
   </div>
  </div>
 )
}

export default Skills
