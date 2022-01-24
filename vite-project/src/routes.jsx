import { prepareRoutes } from '@curi/router'

export default prepareRoutes([
  {
    name: 'Home',
    path: '',
  },
  {
    name: 'Book',
    path: 'book/:id',
  }, {
    name: 'Checkout',
    path: 'checkout',
  }, {
    name: 'Catch All',
    path: '(.*)',
  },
])
