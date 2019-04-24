import React from 'react'
import { storiesOf } from '@storybook/react'

import { SellerMachine } from '../components/SellerMachine'

import './CrafterMachine.storybook'

storiesOf('SellerMachine', module)
  .add('Seller', () => <SellerMachine />)
