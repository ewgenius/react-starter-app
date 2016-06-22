import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import configureStore from './configureStore'
import Root from './containers/Root.jsx'

const store = configureStore()

render(<Root store={store}/>, document.getElementById('app'))
