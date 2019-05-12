import { ui } from '../reducers/ui'
import { StarterMachine } from '../model/machine'
const constants = require('../constants')

it('Test reducer with ACTION_SELECTION_NEW', () => {
  var action = {
    type: constants.ACTION_SELECTION_NEW,
    machine: 'StarterMachine'
  }
  var state = { empty_state: '' }

  var stateRta = {
    empty_state: '',
    selected: { type: 'NEW',
      machine: action.machine }
  }

  var rta = ui(state, action)

  expect(rta).toEqual(stateRta)
})

it('Test reducer with ACTION_SELECTION_BLANK', () => {
  var action = {
    type: constants.ACTION_SELECTION_BLANK,
    blockId: 1
  }

  var state = { selected: {
    type: 'NOT NEW'
  }
  }

  var stateRta = {
    selected: {
      type: 'NOT NEW'
    }

  }

  var rta = ui(state, action)

  expect(rta).toEqual(stateRta)
})

it('Test reducer with ACTION_SELECTION_MACHINE', () => {
  var action = {
    type: constants.ACTION_SELECTION_MACHINE,
    machine: 'StarterMachine',
    blockId: 1
  }
  var state = {
    emptystate: true
  }
  var stateRta = {
    emptystate: true,
    selected: {
      type: 'MACHINE',
      machine: 'StarterMachine'
    }

  }
  var rta = ui(state, action)
  expect(rta).toEqual(stateRta)
})

it('Test reducer with ACTION_ROTATE DOWN => LEFT', () => {
  var machine = new StarterMachine(1)
  machine.orientation = 'DOWN'
  var machineOrientation = new StarterMachine(1)
  machineOrientation.orientation = 'RIGHT'
  var action = {
    type: constants.ACTION_ROTATE,
    machine: machine,
    blockId: 1
  }
  var state = {
    emptystate: true,
    factory: [machine]
  }
  var stateRta = {
    emptystate: true,
    factory: [machineOrientation]
  }
  stateRta.factory[machine.id] = machine
  var rta = ui(state, action)
  expect(rta).toEqual(stateRta)
})
