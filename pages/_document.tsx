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
    {/* Allows side nav rendering */}
    <nav id='side-nav' />
    <Head />
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}

export default Document
