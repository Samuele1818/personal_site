import {
 FC,
 ReactNode,
 useEffect,
 useLayoutEffect,
 useRef,
} from 'react'

type Props = {
 children: ReactNode
 className: string
 containerOffsetTop: number | undefined
 containerClientHeight: number | undefined
}

const FixedElement: FC<Props> = ({
 containerOffsetTop,
 containerClientHeight,
 className,
 children,
}) => {
 const ref = useRef<HTMLDivElement>(null)

 // Get the initial bottom of the fixed element
 const t = useRef<number>()

 //Get the initial offset top of the fixed element
 const fivePercentHeight = containerClientHeight
  ? containerClientHeight * (15 / 100)
  : 0

 const scrollHandler = () => {
  if (
   ref.current &&
   containerOffsetTop &&
   containerClientHeight &&
   t.current
  ) {
   const b =
    containerOffsetTop +
    containerClientHeight -
    window.visualViewport.height
   if (
    scrollY >= t.current + containerOffsetTop &&
    scrollY <= b - fivePercentHeight
   ) {
    ref.current.style.top = 'unset'
    ref.current.style.bottom = `${
     (scrollY - b) * -1
    }px`
   } else if (scrollY > b - fivePercentHeight) {
    ref.current.style.bottom = '15%'
   } else {
    ref.current.style.top = '15%'
   }
  }
 }

 useLayoutEffect(() => {
  if (ref.current)
   t.current = ref.current.offsetTop
 }, [ref])

 useEffect(() => {
  if (window)
   window.addEventListener(
    'scroll',
    () => scrollHandler(),
    true
   )
  return () =>
   window.removeEventListener('scroll', () =>
    scrollHandler()
   )
 })

 return (
  <div ref={ref} className={className}>
   {children}
  </div>
 )
}

export default FixedElement
