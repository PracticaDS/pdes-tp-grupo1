import React from 'react'
import { storiesOf } from '@storybook/react'

import { CrafterMachine } from '../components/CrafterMachine'
import { StarterMachine } from '../components/StarterMachine'
import { SellerMachine } from '../components/SellerMachine'
import { FurnaceMachine } from '../components/FurnaceMachine'

storiesOf('Maquinas', module)
  .add('Crafter', () => <CrafterMachine />)
  .add('Starter', () => <StarterMachine />)
  .add('Seller', () => <SellerMachine />)
  .add('Furnace', () => <FurnaceMachine />)
