import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

import { SellerMachine } from '../components/SellerMachine';

storiesOf('SellerMachine', module)
  .add('Seller', () => (
    <SellerMachine />
  ))
  ;