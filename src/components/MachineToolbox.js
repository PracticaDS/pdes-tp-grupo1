import React from 'react'
import PropTypes from 'prop-types'

import { BaseMachine } from '../model/machine'

import './MachineToolbox.css'
import '../styles/Machine.css'

const constants = require('../constants')

export const MachineToolbox = ({onSelected}) => {
  return (
    <div className='toolbox'>
      <h1 className='title'>Máquinas</h1>
      <div className='items'>
        {constants.MACHINE_TYPES.map(t => <Button type={t} onSelected={onSelected} />)}
      </div>
    </div>
  )
}

MachineToolbox.propTypes = {
  onSelected: PropTypes.func
}

const Button = ({type, onSelected}) => (
  <span onClick={() => onSelected(BaseMachine.createMachine(type))}>
    <div className={'machine ' + type.toLowerCase()} />
  </span>
)

Button.propTypes = {
  onSelected: PropTypes.func,
  type: PropTypes.string
}
