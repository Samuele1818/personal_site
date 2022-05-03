import { FC } from 'react'
import LanguagesAndTechnologies from '../../../public/svg/LanguagesAndTechnologies'
import PersonalSkills from '../../../public/svg/PersonalSkills'

const Skills: FC = () => {
 return (
  <div className='h-screen w-full mt-s relative'>
   <h1 className='tracking-tight mx-auto font-bold text-center leading-snug text-black text-4xl first-letter:uppercase'>
    Skills
   </h1>
   <div className='flex w-full flex'>
    <LanguagesAndTechnologies className='w-[60%] left-[45%] bottom-0' />
    <PersonalSkills className='w-[40%] h-[80%]' />
   </div>
  </div>
 )
}

export default Skills
