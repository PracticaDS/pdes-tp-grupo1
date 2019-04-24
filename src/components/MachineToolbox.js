import React from 'react'
import { StarterMachine } from './StarterMachine'
import { TransporterMachine } from './TransporterMachine'
import { FurnaceMachine } from './FurnaceMachine'
import { SellerMachine } from './SellerMachine'
import { CrafterMachine } from './CrafterMachine'

import './MachineToolbox.css'

export class MachineToolbox extends React.Component {
  render () {
    return (
      <div className='toolbox'>
        <h1 className='title'>Máquinas</h1>
        <div className='items'>
          <StarterMachine />
          <TransporterMachine />
          <CrafterMachine />
          <FurnaceMachine />
          <SellerMachine />
        </div>
      </div>
    )
  }
}
