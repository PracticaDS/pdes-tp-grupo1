import React from 'react'
import { storiesOf } from '@storybook/react'

import { CrafterMachine } from '../components/CrafterMachine'
import { StarterMachine } from '../components/StarterMachine'
import { SellerMachine } from '../components/SellerMachine'
import { FurnaceMachine } from '../components/FurnaceMachine'
import { TransporterMachine } from '../components/TransporterMachine'
import { MachineToolbox } from '../components/MachineToolbox'
import { Factory } from '../components/Factory'
import { DeleteEditor } from '../components/DeleteEditor'
import { Machine } from '../components/Machine'

const constants = require('../constants')

storiesOf('Maquinas', module)
  .add('Crafter', () => <CrafterMachine />)
  .add('Starter', () => <StarterMachine />)
  .add('Seller', () => <SellerMachine />)
  .add('Furnace', () => <FurnaceMachine />)
  .add('Transporter', () => <TransporterMachine />)
  .add('Machine default', () => <Machine type={constants.MACHINE_STARTER} />)
  .add('Machine left', () => <Machine type={constants.MACHINE_STARTER} orientation='LEFT' material='IRON' />)
  .add('Machine up', () => <Machine type={constants.MACHINE_STARTER} orientation='UP' material='IRON' />)
  .add('Machine right', () => <Machine type={constants.MACHINE_STARTER} orientation='RIGHT' material='IRON' />)

storiesOf('Toolbox', module)
  .add('MachineToolbox', () => <MachineToolbox />)

storiesOf('Factory', module)
  .add('Factory', () => <Factory h={8} w={8} />)

storiesOf('Edicion', module)
  .add('Delete', () => <DeleteEditor />)