import React from 'react'
import PropTypes from 'prop-types'

import { Machine } from './Machine'

const constants = require('../constants')

export const FactoryBlock = (props) => {
  const renderMachine = () => props.type !== constants.BLOCK_EMPTY ? <Machine type={props.type} /> : ''

  return (
    <span className='block' onClick={() => props.onClick(props.id)}>{renderMachine()}</span>
  )
}

FactoryBlock.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func
}
