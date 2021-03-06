import { connect } from 'react-redux'
import { Factory } from '../components/Factory'

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    factory: state.factory,
    toMove: state.toMove
  }
}

export default connect(mapStateToProps, null)(Factory)
