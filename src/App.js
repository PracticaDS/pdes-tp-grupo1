import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import { tick } from './actions/game'
import MachineToolbox from './containers/MachineToolbox'
import Factory from './containers/Factory'
import DetailsToolBox from './containers/DetailsToolBox'
import Money from './containers/Money'

class App extends React.Component {
  componentDidMount () {
    setInterval(this.props.notifyTick, 1000)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='app-title'>
            Revolución Industrial
          </h1>
          <Money />
        </header>
        <body>
          <MachineToolbox />
          <Factory />
          <DetailsToolBox />
        </body>
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
