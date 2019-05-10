import { connect } from 'react-redux'
import { DetailsToolBox } from '../components/DetailsToolBox'

import { deleted, rotate, move } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onDeleted: (machine) => dispatch(deleted(machine)),
    onRotate: (machine) => dispatch(rotate(machine)),
    onMove: (machine) => dispatch(move(machine))
  }
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
    toMove: state.toMove,
    selection: state.selected
  }
}

export default connect(mapStateToProps, mapActionsToProps)(DetailsToolBox)
