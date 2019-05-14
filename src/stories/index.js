import React from 'react'
import { storiesOf } from '@storybook/react'

import { MachineToolbox } from '../components/MachineToolbox'
import { Factory } from '../components/Factory'
import { Machine } from '../components/Machine'
import { StarterMachine, BaseMachine } from '../model/machine';


const constants = require('../constants')

storiesOf('Maquinas', module)
  .add('Machine default', () => {
      const machine = new StarterMachine()
      return <Machine machine={machine} />
    })
  
  .add('Machine left', () => {
    const machine = new StarterMachine()
    machine.orientation = 'LEFT'
    return <Machine machine={machine} />
  })
  .add('Machine up', () => {
    const machine = new StarterMachine()
    machine.orientation = 'UP'
    return <Machine machine={machine} />
  })
  .add('Machine right', () => {
    const machine = new StarterMachine()
    machine.orientation = 'RIGHT'
    return <Machine machine={machine} />
  })

storiesOf('Toolbox', module)
  .add('MachineToolbox', () => {
    const selection= {
      machine: new StarterMachine()
    }
  return <MachineToolbox selection={selection}/>
})
