import React from 'react'
import PropTypes from 'prop-types'

import { Machine } from './Machine'

const constants = require('../constants')

export const FactoryBlock = (props) => {
  const renderMachine = () => props.machine ? <Machine machine={props.machine} /> : ''

  return (
    <span className='block' onClick={() => props.onClick(props.id)}>{renderMachine()}</span>
  )
}

FactoryBlock.propTypes = {
  machine: PropTypes.object,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func
}
