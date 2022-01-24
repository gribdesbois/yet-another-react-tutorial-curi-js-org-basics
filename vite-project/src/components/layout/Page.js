import React from 'react'

const Page = ({ children, ...rest }) => (
  <div {...rest} className="relative md:pt-4 md:pr-0 md:pb-0 md:pl-4">
    {children}
  </div>
)

export default Page
