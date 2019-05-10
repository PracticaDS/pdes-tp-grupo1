import { connect } from 'react-redux'
import { FactoryBlock } from '../components/FactoryBlock'

import { blankSelection, machineSelection } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onBlankClick: blockId => dispatch(blankSelection(blockId)),
    onMachineClick: machine => dispatch(machineSelection(machine))
  }
}

const mapStateToProps = (state) => {
  return {
    selection: state.selected
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FactoryBlock)
