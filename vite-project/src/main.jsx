import React from 'react'
import ReactDOM from 'react-dom'
import { createRouter, announce } from '@curi/router'//! announce sets text-content of a ARIA Live Region
import { browser } from '@hickory/browser'

import routes from './routes'
import './index.css'
import App from './App'

const router = createRouter(browser, routes, {
  sideEffects: [
    announce(({ response }) => `Navigated to ${response.location.pathname}`),
  ],
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
