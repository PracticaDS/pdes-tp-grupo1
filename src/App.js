import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import { tick } from './actions/game'
import MachineToolbox from './containers/MachineToolbox'
import Factory from './containers/Factory'

class App extends React.Component {
  componentDidMount () {
    setInterval(this.props.notifyTick, 2000)
  }

  render () {
    return (
      <div className='App'>
        <MachineToolbox />
        <Factory />
      </div>
    )
  }
}

const mapActionsToProps = dispatch => {
  return {
    notifyTick: () => dispatch(tick())
  }
}

export default connect(null, mapActionsToProps)(App)
