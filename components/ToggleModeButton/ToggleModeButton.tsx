import {
 FC,
 useContext,
 useLayoutEffect,
} from 'react'
import {
 DarkThemeIcon,
 LightThemeIcon,
} from '../../icons/icons'
import { ThemeContext } from '../../lib/ThemeProvider/ThemeProvider'

type Props = {}

const ToggleModeButton: FC<Props> = (props) => {
 const { isDark, toggleIsDark } =
  useContext(ThemeContext)
 useLayoutEffect(() => {
  if (
   localStorage.theme === 'dark' ||
   (!('theme' in localStorage) &&
    window.matchMedia(
     '(prefers-color-scheme: dark)'
    ).matches)
  ) {
   toggleIsDark(true)
   document.documentElement.classList.remove(
    'dark'
   )
  } else {
   document.documentElement.classList.add('dark')
  }
 }, [])

 const toggleDarkMode = () => {
  document.documentElement.classList.remove(
   isDark ? 'light' : 'dark'
  )
  document.documentElement.classList.add(
   isDark ? 'dark' : 'light'
  )
  localStorage.theme = isDark ? 'light' : 'dark'
  toggleIsDark(!isDark)
 }

 return (
  <button
   {...props}
   onMouseDown={() => toggleDarkMode()}>
   {isDark ? (
    <DarkThemeIcon />
   ) : (
    <LightThemeIcon />
   )}
  </button>
 )
}

export default ToggleModeButton
