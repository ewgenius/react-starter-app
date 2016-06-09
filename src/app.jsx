import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import './styles/main.scss'

const counter = (state = 0, action) => do {
  if (action.type === 'INCREMENT')
    state + 1
  else if (action.type === 'DECREMENT')
    state - 1
  else
    state
}

const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    return <div>
      {this.props.value}
      <button onClick={this.props.onIncrement}>+</button>
      <button onClick={this.props.onDecrement}>-</button>
    </div>
  }
}

render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />, document.getElementById('app'))
