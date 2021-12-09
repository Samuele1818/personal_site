import {
 FC,
 useContext,
 useEffect,
 useRef,
} from 'react'
import { useTranslation } from 'next-i18next'
import Section from '../../../components/Section'
import { ThemeContext } from '../../../lib/ThemeProvider/ThemeProvider'
import { timer } from '../../../utils/utils'
import CodeEditor from '../../../components/CodeEditor'

type Props = {}

const codeString =
 '\x63\x6F\x6E\x73\x74\x20\x61\x75\x74\x6F\x20\x3D\x20\x28\x29\x20\x3D\x3E\x20\x7B\x0A\x20\x63\x6F\x6E\x73\x6F\x6C\x65\x2E\x64\x65\x62\x75\x67\x28\x27\x48\x49\x27\x29\x0A\x7D'

const Cover: FC<Props> = () => {
 const [t] = useTranslation('common')
 const editorRef = useRef<HTMLDivElement>(null)
 const { isDark } = useContext(ThemeContext)

 const write = async () => {
  for (let i = 0; i < codeString.length; i++) {
   // @ts-ignore
   editorRef.current?.addCode(codeString[i])
   await timer(200)
  }
 }

 useEffect(() => {
  write()
 }, [editorRef])

 return (
  <Section className='bg-white dark:bg-background'>
   <section className='flex flex-col w-full lg:w-1/2'>
    <h1 className='sm:text-center md:text-center lg:text-left'>
     {t('common:slogan')}
    </h1>
    <h2 className='sm:text-center md:text-center lg:text-left'>
     {t('common:learn')}
    </h2>
   </section>
   <section className='w-1/2 hidden lg:block'>
    <CodeEditor
     ref={editorRef}
     theme={isDark ? 'one-light' : 'night-owl'}
     readOnly={false}
    />
   </section>
  </Section>
 )
}

export default Cover
