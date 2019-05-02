import React from 'react'
import { StarterMachine } from './StarterMachine'
import { TransporterMachine } from './TransporterMachine'
import { FurnaceMachine } from './FurnaceMachine'
import { SellerMachine } from './SellerMachine'
import { CrafterMachine } from './CrafterMachine'

const constants = require('../constants')

export class FactoryBlock extends React.Component {
  renderMachine () {
    switch (this.props.type) {
      case constants.BLOCK_FURNACE:
        return <FurnaceMachine />
      case constants.BLOCK_STARTER:
        return <StarterMachine />
      case constants.BLOCK_SELLER:
        return <SellerMachine />
      case constants.BLOCK_TRANSPORTER:
        return <TransporterMachine />
      case constants.BLOCK_CRAFTER:
        return <CrafterMachine />
      default:
        return ''
    }
  }

  render () {
    return (
      <span className='block' onClick={() => this.props.onClick(this.props.id)}>{this.renderMachine()}</span>
    )
  }
}