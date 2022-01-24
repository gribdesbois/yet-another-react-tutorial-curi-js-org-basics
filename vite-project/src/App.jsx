import { useState } from 'react'
import { useResponse } from '@curi/react-dom'
import logo from './logo.svg'
import './App.css'

function App() {
  const { response } = useResponse()
  const { body: Body } = response
  return <Body response={response} />
}

export default App
