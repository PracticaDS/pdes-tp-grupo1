import React from 'react'
import PropTypes from 'prop-types'

import { Machine } from './Machine'

var classNames = require('classnames')

export const FactoryBlock = (props) => {
  const classes = {
    block: true,
    selected: props.machine && props.selection.machine && props.selection.machine.id === props.machine.id
  }

  if (props.machine) {
    return <span className={classNames(classes)}><Machine onClick={() => props.onMachineClick(props.machine)} machine={props.machine} /></span>
  } else {
    return <span className={classNames(classes)} onClick={() => props.onBlankClick(props.id)} />
  }
}

FactoryBlock.propTypes = {
  machine: PropTypes.object,
  selection: PropTypes.object,
  id: PropTypes.number.isRequired,
  onBlankClick: PropTypes.func,
  onMachineClick: PropTypes.func
}
