import React from 'react'
import { Link } from '@curi/react-dom'

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link name='Home'>Home</Link>
        </li>
        <li>
          <Link name='Checkout'>Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
