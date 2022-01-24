import { prepareRoutes } from '@curi/router'
import Home from './components/Home'
import Book from './components/Book'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'

export default prepareRoutes([
  {
    name: 'Home',
    path: '',
    respond() {
      return { body: Home }
    },
  },
  {
    name: 'Book',
    path: 'book/:id',
    respond() {
      return { body: Book }
    },
  }, {
    name: 'Checkout',
    path: 'checkout',
    respond() {
      return { body: Checkout }
    },
  }, {
    name: 'Catch All',
    path: '(.*)',
    respond() {
      return { body: NotFound }
    },
  },
])
