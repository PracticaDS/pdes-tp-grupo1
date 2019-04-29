import { connect } from 'react-redux'
import { FactoryBlock } from '../components/FactoryBlock'

import { added } from '../actions/game'

const mapActionsToProps = dispatch => {
  return {
    onClick: blockId => dispatch(added(blockId))
  }
}

export default connect(null, mapActionsToProps)(FactoryBlock)
