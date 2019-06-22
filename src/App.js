import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import axios from 'axios'

import { API } from './constants'
import { tick, init, save } from './actions/game'
import MachineToolbox from './containers/MachineToolbox'
import Factory from './containers/Factory'
import DetailsToolBox from './containers/DetailsToolBox'
import Money from './containers/Money'

class App extends React.Component {
  componentDidMount () {
    const user = this.props.match.params.user
    const factory = this.props.match.params.factory
    axios.get(API + '/usuarios/' + user + '/fabricas/' + factory)
      .then(result => {
        this.props.initState(result.data)
        setInterval(this.props.notifyTick, 1000)
        setInterval(() => this.props.notifySave(user, factory), 1000)
      })
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
        <div className='container'>
          <MachineToolbox />
          <Factory />
          <DetailsToolBox />
        </div>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => {
  return {
    notifyTick: () => dispatch(tick()),
    initState: (state) => dispatch(init(state)),
    notifySave: (user, game) => dispatch(save(user, game))
  }
}

export default connect(null, mapActionsToProps)(App)
