import { connect } from 'react-redux'
import { EditionToolbox } from '../components/EditionToolbox'

import { deleted, rotate } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onDeleted: () => dispatch(deleted()),
    onRotate: () => dispatch(rotate())
  }
}

export default connect(null, mapActionsToProps)(EditionToolbox)