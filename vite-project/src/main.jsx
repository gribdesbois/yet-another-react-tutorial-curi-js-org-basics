import React from 'react'
import ReactDOM from 'react-dom'
import { createRouter, announce } from '@curi/router'//! announce sets text-content of a ARIA Live Region
import { browser } from '@hickory/browser'
import { createRouterComponent } from '@curi/react-dom'

import routes from './routes'
import './index.css'
import App from './App'

const router = createRouter(browser, routes, {
  sideEffects: [
    announce(({ response }) => `Navigated to ${response.location.pathname}`),
  ],
})

const Router = createRouterComponent(router)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
