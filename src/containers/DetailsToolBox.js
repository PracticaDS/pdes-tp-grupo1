import { connect } from 'react-redux'
import { DetailsToolBox } from '../components/DetailsToolBox'

import { deleted, rotate, getMoney } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onDeleted: () => dispatch(deleted()),
    onRotate: () => dispatch(rotate())
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    money: state.money
  }
}

export default connect(mapStateToProps, mapActionsToProps)(DetailsToolBox)