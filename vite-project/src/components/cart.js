const cart = new Map()

export default {
  add(book, quantity) {
    cart.set(book, quantity)
  },
  items() {
    const books = []
    for (const [book, quantity] of cart.entries()) {
      books.push({
        title: book.title,
        quantity,
      })
    }
    return books
  },
  reset() {
    cart.clear()
  },
}
