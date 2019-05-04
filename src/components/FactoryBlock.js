import React from 'react'
import PropTypes from 'prop-types'

import { Machine } from './Machine'

const constants = require('../constants')

export const FactoryBlock = (props) => {
  const renderMachine = () => props.block.type !== constants.BLOCK_EMPTY ? <Machine type={props.block.type} material={props.block.material} /> : ''

  return (
    <span className='block' onClick={() => props.onClick(props.id)}>{renderMachine()}</span>
  )
}

FactoryBlock.propTypes = {
  block: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func
}
