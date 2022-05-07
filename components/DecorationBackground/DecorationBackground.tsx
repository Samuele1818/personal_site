import {
 FC,
 ReactNode,
 useEffect,
 useRef,
} from 'react'
import {
 DecorationRhombusIcon,
 DecorationStarIcon,
} from '../../public/svg/icons/icons'
import { useSpring, a } from "react-spring";

type Props = {}

const DecorationBackground: FC<Props> = () => {
 const [{ xy }, set] = useSpring(() => {
  xy: [0, 0]
 })
 const onMove = ({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
const translate = `translate(90,${105 + o / 4})`)
 
 const array = useRef<Array<ReactNode>>([])

 const randomArray = () => {
  let rand = 100
  const boundaries = {
   x: backgroundRef.current?.offsetWidth,
   y: backgroundRef.current?.offsetHeight,
  }
  console.debug(boundaries.y)
  while (rand) {
   const props = {
    style: {
     left:
      boundaries.x -
      Math.floor(Math.random() * boundaries.x) +
      1,
     top:
      boundaries.y -
      Math.floor(Math.random() * boundaries.y) +
      1,
    },
   }
   array.current.push(
    rand % 2 == 0 ? (
     <a.DecorationStarIcon
      className='absolute z-0'
      {...props}
     />
    ) : (
     <DecorationRhombusIcon
      className='absolute z-0'
      {...props}
     />
    )
   )
   rand--
  }
 }

 const backgroundRef =
  useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (backgroundRef.current && array.current)
   randomArray()
 }, [])

 return (
  <div
   className='h-full w-full absolute'
   onMouseMove={onMove}
   ref={backgroundRef}>
   {array.current.map((item, key) => {
    return item
   })}
  </div>
 )
}

export default DecorationBackground
