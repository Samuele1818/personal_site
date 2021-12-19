import { FC } from 'react'
import ExploreArrow from "../ExploreArrow";

type Props = {
  title: string
  text: string
  link: string | undefined
}

const TextWrapper: FC<Props> = ({ title, text, link}) => {
  return (
   <>
    <h1 className='text-5xl text-center lg:text-left z-10'>
     {title}
    </h1>
    <p className='text-3xl text-center lg:text-left text-codGray dark:text-white text-opacity-80 font-light z-10'>
     {text}
    </p>
     {
       link && <ExploreArrow link={link} />
     }
   </>
  )
};

export default TextWrapper;
