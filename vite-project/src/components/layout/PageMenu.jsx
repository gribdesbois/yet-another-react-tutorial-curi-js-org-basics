import React from 'react'
import { Link } from '@curi/react-dom'

const MenuItem = ({ item, level }) => (
  <li>
    <Link hash={item.hash} className="no-underline">
      {item.title}
    </Link>
    {item.children ? <Group items={item.children} level={level} /> : null}
  </li>
)

const Group = ({ items, level }) => {
  const leftPadding = level === 0 ? 'p-0' : 'pl-3'
  return (
    <ol className={`my-1 mx-0 p-0 list-none ${leftPadding}`}>
      {items.map((i) => (
        <MenuItem key={i.hash} item={i} level={level + 1} />
      ))}
    </ol>
  )
}

const PageMenu = ({ contents }) => (
  <menu className="max-w-full p-0 m-0">
    <Group items={contents} level={0} />
  </menu>
)

export default React.memo(PageMenu)
