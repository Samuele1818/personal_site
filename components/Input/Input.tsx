import {
 createElement,
 forwardRef,
 ReactNode,
 useRef,
 useState,
} from 'react'
import debounce from 'lodash.debounce'
import composeRefs from '@seznam/compose-react-refs'
import { Property } from 'csstype'
import BorderColor = Property.BorderColor

type Props = {
 // input element type
 elementType: 'input' | 'textarea'
 // type of input element: username, email, password, ecc.
 inputType?: string
 label?: string
 placeholder?: string
 // classnames given to the input container
 containerClassName?: string
 // classnames given to the input element
 inputClassname?: string
 // classnames given to the label
 labelClassname?: string
 // function by which determine if input content is valid or not
 checkErrorFunction: (value: string) => unknown
 // information about the status of input (error, text)
 statusInformation: {
  error: boolean
  text: string
 }
 children?: ReactNode
}

const Input = forwardRef<
 HTMLInputElement | HTMLTextAreaElement,
 Props
>(
 (
  {
   elementType,
   inputType,
   placeholder,
   label,
   containerClassName,
   inputClassname,
   labelClassname,
   children,
   checkErrorFunction,
   statusInformation,
  },
  forwardedInputRef
 ) => {
  const [isFocussed, setIsFocussed] =
   useState(false)

  const handleChange = debounce(
   (value: string) => {
    checkErrorFunction &&
     checkErrorFunction(value)
   },
   800
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const isFilled: boolean = inputRef.current
   ? inputRef.current.value !== ''
   : false

  return (
   <>
    {/* TODO: Adjust size of TextArea */}
    <div
     style={{
      borderColor: (statusInformation?.error &&
      isFilled
       ? 'red'
       : isFocussed && '#337CE9') as BorderColor,
     }}
     className={`cursor-text relative w-full h-12 border-solid border-[0.5px] px-4 py-2 bg-white shadow-shadow rounded-lg ${containerClassName}`}
     onClick={() => inputRef.current?.focus()}>
     <label
      className={`absolute left-0 -top-6 z-20 ${labelClassname}`}>
      {label}
     </label>
     {children}
     {createElement(
      elementType,
      {
       placeholder: placeholder,
       className: `w-full h-full text-black ${inputClassname}`,
       type: inputType,
       ref: composeRefs(
        forwardedInputRef,
        inputRef
       ),
       onChange: (v) =>
        handleChange(v.currentTarget.value),
       onFocus: () => setIsFocussed(true),
       onBlur: () => setIsFocussed(false),
      },
      null
     )}
    </div>
    {statusInformation.error && isFilled && (
     <p className='relative text-red-500 text-md mt-2 '>
      {statusInformation.text}
     </p>
    )}
   </>
  )
 }
)

Input.displayName = 'Input'

export default Input
