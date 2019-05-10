import { connect } from 'react-redux'
import { MachineToolbox } from '../components/MachineToolbox'

import { newSelection } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onSelected: machine => dispatch(newSelection(machine))
  }
}

const mapStateToProps = (state) => {
  return {
    selection: state.selected
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MachineToolbox)
