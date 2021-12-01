import {
 forwardRef,
 useEffect,
 useImperativeHandle,
 useRef,
 useState,
} from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { THEMES } from './CustomThemes'
import 'codemirror/lib/codemirror.css'
import { WindowToolbarIcon } from '../../icons/icons'

if (typeof navigator !== 'undefined') {
 require('codemirror/mode/javascript/javascript')
 require('codemirror/mode/jsx/jsx')
}

type Props = {
 readOnly: boolean
 theme: string
}

const CodeEditor = forwardRef<
 HTMLDivElement,
 Props
>(({ readOnly, theme }, ref) => {
 const [code, setCode] =
  useState<string>('')
 let StyledTheme = useRef<JSX.Element>(
  THEMES[0].style
 )

 // @ts-ignore
 useImperativeHandle(ref, () => ({
  addCode: (newCode: string) => {
   setCode(code + newCode)
  },
 }))

 const options = {
  smartIndent: true,
  mode: 'jsx',
  tabSize: 2,
  scrollbarStyle: null,
  readOnly: readOnly,
  theme: theme,
  lineNumbers: true,
  firstLineNumber: 1,
  viewportMargin: Infinity,
  lineWrapping: true,
 }

 useEffect(() => {
  THEMES.map((t) => {
   t.id === theme &&
    (StyledTheme.current = t.style)
  })
 }, [theme])

 const onChange = (a, b, code) => {
  setCode(code)
 }
 return (
  <div
   ref={ref}
   className='relative rounded-lg shadow-2xl'>
   <div className='absolute z-[2] ml-4 mt-4 rounded-lg'>
    <WindowToolbarIcon className='w-[54px] h-[18px]' />
   </div>
   <CodeMirror
    className='rounded-lg'
    options={options}
    value={code}
    onBeforeChange={onChange}
    onChange={onChange}
   />
   {StyledTheme.current}
  </div>
 )
})

export default CodeEditor
