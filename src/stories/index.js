import React from 'react'
import { storiesOf } from '@storybook/react'

import { CrafterMachine } from '../components/CrafterMachine'
import { StarterMachine } from '../components/StarterMachine'
import { SellerMachine } from '../components/SellerMachine'
import { FurnaceMachine } from '../components/FurnaceMachine'
import { TransporterMachine } from '../components/TransporterMachine'
import { MachineToolbox } from '../components/MachineToolbox'

storiesOf('Maquinas', module)
  .add('Crafter', () => <CrafterMachine />)
  .add('Starter', () => <StarterMachine />)
  .add('Seller', () => <SellerMachine />)
  .add('Furnace', () => <FurnaceMachine />)
  .add('Transporter', () => <TransporterMachine />)

storiesOf('Toolbox', module)
  .add('MachineToolbox', () => <MachineToolbox />)
