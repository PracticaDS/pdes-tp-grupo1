import { connect } from 'react-redux'
import { DetailsToolBox } from '../components/DetailsToolBox'

import { deleted, rotate, move } from '../actions/game'

const constants = require('../constants')

const mapActionsToProps = dispatch => {
  return {
    onDeleted: () => dispatch(deleted()),
    onRotate: () => dispatch(rotate()),
    onMove: () => dispatch(move())
  }
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
    toMove: state.toMove,
    machinePrice: state.selected
  }
}

export default connect(mapStateToProps, mapActionsToProps)(DetailsToolBox)