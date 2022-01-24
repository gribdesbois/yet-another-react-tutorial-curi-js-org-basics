import React from 'react'
import { Link } from '@curi/react-dom'
import { Paragraph } from './layout/Sections'
import books from '../books'

function Home() {
  return (
    <article>
      <ul>
        {books.map((book) => {
          <li key={book.id}>
            <Link name='Book' params={{ id: book.id }}>
              {book.title} by {book.author}
            </Link>
          </li>
        })}
      </ul>
    </article>
  )
}

export default Home
