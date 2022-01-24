import React from 'react'
import { Paragraph } from './layout/Sections'
import books from '../books'

function Book({ response }) {
  const id = parseInt(response.params.id, 10)
  const book = books.find((b) => b.id === id)
  if (!book) {
    return (
      <article>
        <Paragraph>The requested book could not be found</Paragraph>
      </article>
    )
  }
  const {title, author, published, pages}
  return(
    <article>
      <h1> {title}</h1>
      <h2>by {author}</h2>
      <Paragraph>Published in {published}</Paragraph>
      <Paragraph>{pages} pages</Paragraph>
    </article>
  )
}

export default Book
