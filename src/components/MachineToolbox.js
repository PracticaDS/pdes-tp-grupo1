import React from 'react'
import { StarterMachine } from './StarterMachine'
import { TransporterMachine } from './TransporterMachine'
import { FurnaceMachine } from './FurnaceMachine'
import { SellerMachine } from './SellerMachine'
import { CrafterMachine } from './CrafterMachine'

import './MachineToolbox.css'

const constants = require('../constants')

export const MachineToolbox = ({onSelected}) => {
  return (
    <div className='toolbox'>
      <h1 className='title'>Máquinas</h1>
      <div className='items'>
        <span onClick={() => onSelected(constants.BLOCK_STARTER)} ><StarterMachine /></span>
        <span onClick={() => onSelected(constants.BLOCK_TRANSPORTER)} ><TransporterMachine /></span>
        <span onClick={() => onSelected(constants.BLOCK_CRAFTER)} ><CrafterMachine /></span>
        <span onClick={() => onSelected(constants.BLOCK_FURNACE)} ><FurnaceMachine /></span>
        <span onClick={() => onSelected(constants.BLOCK_SELLER)} ><SellerMachine /></span>
      </div>
    </div>
  )
}
