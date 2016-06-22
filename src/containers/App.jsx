import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {}
}

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return <div className='app'>app</div>
  }
}

export default connect(mapStateToProps)(App)
