import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

const configureStore = () => {
  const enchancer = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

  const store = createStore(combineReducers({
    vd: (state = {}) => state
  }), enchancer)
  return store
}

export default configureStore
