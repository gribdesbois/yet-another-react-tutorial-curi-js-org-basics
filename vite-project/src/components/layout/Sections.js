import React from 'react'
import { Link } from '@curi/react-dom'

const SECTION_CLASSNAMES = 'mt-3 md:max-w-2xl'
const ASIDE_CLASSNAMES = `${SECTION_CLASSNAMES} py-1 px-2 border-l-2 border-border-green bg-light-green `

export const PlainSection = ({
  children,
  className = '',
  wrapper: Wrapper = 'section',
}) => (
  <Wrapper className={`${SECTION_CLASSNAMES} ${className}`}>
    {children}
  </Wrapper>
)

export const TitledPlainSection = ({ title, children, ...rest }) => (
  <PlainSection {...rest}>
    <h1 className="outline-none" tabIndex={-1}>
      {title}
    </h1>
    {children}
  </PlainSection>
)

const ArticleSection = ({ meta: { title, hash }, children, tag: Tag }) => (
  <>
    <Tag id={hash} className="hash-anchor-fix outline-none" tabIndex={-1}>
      <Link hash={hash} className="header-link no-underline">
        {title}
      </Link>
    </Tag>
    {children}
  </>
)

export const HashSection = (props) => (
  <section className={SECTION_CLASSNAMES}>
    <ArticleSection {...props} />
  </section>
)

export const HashAside = (props) =>
  // .inline-code {
  //   background: ${color.green} !important
  // }
  (
    <section className={ASIDE_CLASSNAMES}>
      <ArticleSection {...props} />
    </section>
  )

export const Paragraph = ({ children, className = '', ...rest }) => (
  <p {...rest} className={`m-0 mb-4 text-base md:text-lg ${className}`}>
    {children}
  </p>
)
