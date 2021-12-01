import {
 FC,
 useEffect,
 useRef,
} from 'react'
import { useTranslation } from 'next-i18next'
import CodeEditor from '../CodeEditor'

type Props = {}

const codeString =
 '\x63\x6F\x6E\x73\x74\x20\x61\x75\x74\x6F\x20\x3D\x20\x28\x29\x20\x3D\x3E\x20\x7B\x0A\x20\x63\x6F\x6E\x73\x6F\x6C\x65\x2E\x64\x65\x62\x75\x67\x28\x27\x48\x49\x27\x29\x0A\x7D'

const Cover: FC<Props> = () => {
 const [t] = useTranslation('common')
 const editorRef =
  useRef<HTMLDivElement>(null)

 const timer = (ms) =>
  new Promise((res) =>
   setTimeout(res, ms)
  )

 const write = async () => {
  for (
   let i = 0;
   i < codeString.length;
   i++
  ) {
   // @ts-ignore
   editorRef.current.addCode(
    codeString[i]
   )
   await timer(300)
  }
 }

 useEffect(() => {
  if (editorRef) write()
 }, [editorRef])

 return (
  <div className='w-full min-h-full flex py-24 px-16 from-primary-dark via-primary-default to-primary-dark bg-primary-default bg-gradient-to-tr'>
   <section className='flex flex-col w-1/2'>
    <h1 className='sm:text-center md:text-center lg:text-left'>
     {t('common:slogan')}
    </h1>
    <h2 className='sm:text-center md:text-center lg:text-left'>
     {t('common:learn')}
    </h2>
   </section>
   <section className='w-1/2'>
    <CodeEditor
     ref={editorRef}
     theme='night-owl'
     readOnly={false}
    />
   </section>
  </div>
 )
}

export default Cover
