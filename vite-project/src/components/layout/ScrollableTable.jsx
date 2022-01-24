import React from 'react'

const ScrollableTable = (props) => (
  <div className="overflow-x-auto">
    <table {...props} />
  </div>
)

export default ScrollableTable
