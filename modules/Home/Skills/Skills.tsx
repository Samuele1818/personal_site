import { FC } from 'react'
import LanguagesAndTechnologies from "../../../public/svg/LanguagesAndTechnologies";
import PersonalSkills from "../../../public/svg/PersonalSkills";

const Skills: FC = () => {
 return (
  <div className='h-screen w-full mt-s relative'>
    <h1 className='tracking-tight mx-auto font-bold text-center leading-snug text-black text-4xl first-letter:uppercase'>Skills</h1>
   <LanguagesAndTechnologies className='absolute right-0 bottom-0'/>
    <PersonalSkills className='relative w-[400px] h-[80%]' />
  </div>
 )
}

export default Skills
