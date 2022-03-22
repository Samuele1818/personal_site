import { FC, ReactNode } from 'react'
import Spinner from '../Spinner'
import { useRouter } from 'next/router'

type Props = {
 text: string
 link?: string
 className?: string
 icon?: ReactNode
 onClick?: () => unknown
 isLoading?: boolean
 isError?: boolean
}

const CTA: FC<Props> = ({
 text,
 link,
 className,
 icon,
 onClick,
 isLoading,
 isError,
}) => {
 const { push } = useRouter()

 return (
  <button
   onClick={() => {
    link && push(link)
    onClick && onClick()
   }}
   className={`${
    isError && 'opacity-50'
   } bg-electricViolet first-letter:uppercase flex text-white py-2 px-4 rounded-lg items-center ${
    isLoading && 'justify-center'
   } ${className}`}>
   {isLoading ? (
    <Spinner />
   ) : (
    <>
     {text}
     <div className='ml-4'>{icon}</div>
    </>
   )}
  </button>
 )
}

export default CTA
