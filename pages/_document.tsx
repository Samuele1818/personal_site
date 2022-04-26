import NextDocument, {
 Head,
 Html,
 Main,
 NextScript,
} from 'next/document'
import React from 'react'

class Document extends NextDocument {
 render() {
  return (
   <Html>
    {/*
       Modify document structure to allows sidebar rendering
       TODO: Implement sidebar menu for mobile devices
     */}
    <nav id='side-nav' />
     <Head><title></title></Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}

export default Document
