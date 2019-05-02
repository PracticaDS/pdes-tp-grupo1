import { connect } from 'react-redux'
import { EditionToolbox } from '../components/EditionToolbox'

import { deleted } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onDeleted: blockId => dispatch(deleted())
  }
}

export default connect(null, mapActionsToProps)(EditionToolbox)