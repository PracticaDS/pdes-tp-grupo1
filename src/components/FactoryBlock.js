import React from 'react'
import PropTypes from 'prop-types'

import { Machine } from './Machine'

export const FactoryBlock = (props) => {
  const renderMachine = () => props.machine ? <Machine machine={props.machine} /> : ''

  if (props.machine) {
    return <span className='block'><Machine onClick={() => props.onMachineClick(props.machine)} machine={props.machine} /></span>
  } else {
    return <span className='block' onClick={() => props.onBlankClick(props.id)} />
  }
}

FactoryBlock.propTypes = {
  machine: PropTypes.object,
  id: PropTypes.number.isRequired,
  onBlankClick: PropTypes.func,
  onMachineClick: PropTypes.func
}
