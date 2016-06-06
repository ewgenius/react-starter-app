import React from 'react'
import {render} from 'react-dom'
import App from './components/App/App.jsx'
import './styles/main.scss'

async function test() {
  await Promise.resolve(1)
}

console.log(test())

render(<App />, document.getElementById('app'))
