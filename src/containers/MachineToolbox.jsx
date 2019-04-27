import { connect } from 'react-redux'
import { MachineToolbox } from '../components/MachineToolbox'

import { selected } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onSelected: () => dispatch(selected())
  }
}

export default connect(null, mapActionsToProps)(MachineToolbox)