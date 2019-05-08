import { connect } from 'react-redux'
import { MachineToolbox } from '../components/MachineToolbox'

import { newSelection } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onSelected: machine => dispatch(newSelection(machine))
  }
}

export default connect(null, mapActionsToProps)(MachineToolbox)