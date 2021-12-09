import { createContext, FC } from 'react'
import useToggle from '../useToggle'

type Props = {}

interface ContextType {
 isDark: boolean
 toggleIsDark: (condition?: boolean) => void
}

export const ThemeContext =
 createContext<ContextType>({
  isDark: false,
  toggleIsDark: () => {},
 })

export const ThemeContextProvider: FC<Props> = ({
 children,
}) => {
 const [isDark, toggleIsDark] = useToggle(false)
 const value = {
  isDark,
  toggleIsDark,
 }
 return (
  <ThemeContext.Provider value={value}>
   {children}
  </ThemeContext.Provider>
 )
}
