import {
 FC,
 useLayoutEffect,
 useState,
} from 'react'
import {
 DarkThemeIcon,
 LightThemeIcon,
} from '../../icons/icons'

type Props = {}

const ToggleModeButton: FC<Props> = (
 props
) => {
 const [isDark, setIsDark] =
  useState<boolean>(false)
 useLayoutEffect(() => {
  if (
   localStorage.theme === 'dark' ||
   (!('theme' in localStorage) &&
    window.matchMedia(
     '(prefers-color-scheme: dark)'
    ).matches)
  ) {
   setIsDark(true)
   document.documentElement.classList.add(
    'dark'
   )
  } else {
   document.documentElement.classList.remove(
    'dark'
   )
  }
 }, [])

 const toggleDarkMode = () => {
  document.documentElement.classList.remove(
   isDark ? 'dark' : 'light'
  )
  document.documentElement.classList.add(
   isDark ? 'light' : 'dark'
  )
  localStorage.theme = isDark
   ? 'light'
   : 'dark'
  setIsDark(!isDark)
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
