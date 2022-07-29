import { FC, useRef, useState } from "react";
import { WindowToolbarIcon } from '../../public/svg/icons/icons'
import Editor, {
 Monaco,
} from '@monaco-editor/react'
import { transform } from '@babel/standalone'

import { importsRegex, pureRegex, replace } from "../../utils/utils";

function transpileCode(code: string) {
  // ignore imports so Babel doesn't transpile it
  const codeToTranspile = replace(code, importsRegex)
  // the magic sauce used to transpile the code
  const options = { presets: ['es2015-loose', 'react'] }
  const { code: transpiledCode } = transform(codeToTranspile, options)
  
  if (!transpiledCode) {
    // syntax errors get caught by the `error` listener
    throw new Error(`Something went wrong transpiling ${codeToTranspile}.`)
  }
  
  const hasImports = Boolean(code.match(importsRegex))
  const imports = code.match(importsRegex)?.join('\n') ?? ''
  
  return {
    // this is passed to `updateIframe`
    iframeCode: hasImports ? `${imports}\n${transpiledCode}` : transpiledCode,
    // this is passed to `updateSource`
    // ignore /*#__PURE__*/ from transpiled output to reduce noise
    sourceCode: replace(transpiledCode, pureRegex),
  }
}


const MonacoEditor: FC = () => {
  
  const [source, setSource] = useState<string>('')
  
  function updateIframe(code: string | undefined): void {
    const source = /* html */ `
    <html>
    <head>
      <link rel="stylesheet" href="/iframe.css">
    </head>
    <body>
      <div id="app"></div>
      <script type="module">${code}</script>
    </body>
    </html>
  `
    setSource(source)
  }
  
  
  /* const insertBullet = (text: string) => {
    if (monaco.current) {
     monaco.current.executeEdits('', [
      {
       range: {
        startLineNumber:
         monaco.current.getPosition().lineNumber,
        startColumn:
         monaco.current.getPosition().column,
        endLineNumber:
         monaco.current.getPosition().lineNumber,
        endColumn:
         monaco.current.getPosition().column,
       },
       text: text,
      },
     ])
    }
   }*/

 /* const write = async () => {
  for (let i = 0; i < CPPCode.length; i++) {
   await timer(20)
   insertBullet(CPPCode[i])
  }
 }*/

 return (
  <>
    <iframe srcDoc={source}/>
   <WindowToolbarIcon className='w-6 h-6 absolute -top-1 left-4 z-20' />
   <Editor
    className='pt-4'
    height='100%'
    width='100%'
    options={{
     lineDecorationsWidth: '0',
     lineNumbersMinChars: '3',
     smoothScrolling: true,
    }}
    /*    onMount={(editor) => {
      monaco.current = editor
      monaco.current.focus()
      write().then(() => {})
     }}*/
    onChange={(code) => {
      updateIframe(code)
    }}
    defaultLanguage='cpp'
    theme='vs'
   />
  </>
 )
}

export default MonacoEditor
