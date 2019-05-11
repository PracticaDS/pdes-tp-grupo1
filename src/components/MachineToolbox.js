import React from 'react'
import PropTypes from 'prop-types'

import { BaseMachine } from '../model/machine'

import '../styles/MachineToolbox.css'
import '../styles/Machine.css'

var classNames = require('classnames')
const constants = require('../constants')

export const MachineToolbox = ({ onSelected, selection }) => {
  return (
    <div className='toolbox'>
      <h1 className='title'>Máquinas</h1>
      <div className='items'>
        {constants.MACHINE_TYPES.map(t => <Button type={t} selection={selection} onSelected={onSelected} />)}
      </div>
    </div>
  )
}

MachineToolbox.propTypes = {
  onSelected: PropTypes.func,
  selection: PropTypes.object
}

const Button = ({ type, onSelected, selection }) => {
  const classes = {
    btn: true,
    selected: selection.machine && type === selection.machine.name && selection.type === 'NEW'
  }

  return (
    <span className={classNames(classes)} onClick={() => onSelected(BaseMachine.createMachine(type))}>
      <div className={'machine ' + type.toLowerCase()} />
    </span>
  )
}

Button.propTypes = {
  onSelected: PropTypes.func,
  type: PropTypes.string
}
