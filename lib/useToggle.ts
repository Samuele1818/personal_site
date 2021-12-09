import { useCallback, useState } from 'react'

const useToggle: (
 initialState?: boolean
) => [boolean, (condition?: boolean) => void] = (
 initialState?: boolean
) => {
 const [state, setState] = useState(
  initialState !== undefined
   ? initialState
   : false
 )
 const toggle: (condition?: boolean) => void =
  useCallback((condition) => {
   setState((prevState) =>
    condition !== undefined
     ? condition
     : !prevState
   )
  }, [])

 return [state, toggle]
}

export default useToggle
