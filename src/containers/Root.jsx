import React, {Component} from 'react'
import {Provider} from 'react-redux'
import App from './App.jsx'
import '../styles/main.scss'

const Root = ({store}) => <Provider store={store}>
  <App />
</Provider>

export default Root
