import React from 'react'
import PrismCode from '../highlight/PrismCode'

const CodeBlock = ({ children, lang = 'javascript', ...rest }) => (
  <figure className="m-0 mb-4">
    <pre {...rest} className="align-top h-full whitespace-pre-wrap">
      <PrismCode component="code" className={`language-${lang}`}>
        {children}
      </PrismCode>
    </pre>
  </figure>
)

export { CodeBlock }
