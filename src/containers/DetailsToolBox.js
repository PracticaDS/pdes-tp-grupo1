import { connect } from 'react-redux'
import { DetailsToolBox } from '../components/DetailsToolBox'

import { deleted, rotate, move } from '../actions/game'

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
    toMove: state.toMove
  }
}

export default connect(mapStateToProps, mapActionsToProps)(DetailsToolBox)