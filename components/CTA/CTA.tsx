import { FC } from 'react'
import { useRouter } from 'next/router'
import { ArrowIcon } from "../../public/icons/icons";

type Props = {
 text: string
  classNames: string
 link?: string
 onClick?: () => unknown
}

const CTA: FC<Props> = ({
 text,
  classNames,
 link,
 onClick,
}) => {
 const { push } = useRouter()

 return (
  <button
    type='submit'
   className={`${classNames} text-white bg-electricViolet rounded-lg inline-flex items-center px-1 py-2 first-letter:uppercase`}
   onClick={() => {
    link && push(link)
    onClick && onClick()
   }}>
   {text}
    <ArrowIcon className='ml-2' />
  </button>
 )
}

export default CTA
