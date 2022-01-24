import { useState } from 'react'
import { useResponse } from '@curi/react-dom'
import logo from './logo.svg'
import './App.css'
import NavMenu from './components/NavMenu'

function App() {
  const { response } = useResponse()
  const { body: Body } = response
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Body response={response} />
      </main>
    </>
  )
}

export default App
