import { connect } from 'react-redux'
import { Money } from '../components/Money'

import '../styles/Money.css'

const mapStateToProps = (state) => {
  return {
    money: state.money
  }
}

export default connect(mapStateToProps)(Money)
