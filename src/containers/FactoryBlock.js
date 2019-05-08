import { connect } from 'react-redux'
import { FactoryBlock } from '../components/FactoryBlock'

import { blankSelection, machineSelection } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onBlankClick: blockId => dispatch(blankSelection(blockId)),
    onMachineClick: machine => dispatch(machineSelection(machine))
  }
}

export default connect(null, mapActionsToProps)(FactoryBlock)
