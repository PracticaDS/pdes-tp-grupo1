import { ui } from '../reducers/ui'
import { StarterMachine } from '../model/machine';
const constants = require('../constants')

it('Test reducer with ACTION_SELECTION_NEW', () => {
  var action = {
    type: constants.ACTION_SELECTION_NEW,
    machine: 'StarterMachine'
  }
  var state = {empty_state: ''}

  var state_rta = {
                    empty_state: '',
                    selected: { type: 'NEW',
                               machine: action.machine} 
                  }

  var rta = ui(state, action)
  
  expect(rta).toEqual(state_rta)
});

    
it('Test reducer with ACTION_SELECTION_BLANK', () => {
  var action = {
    type: constants.ACTION_SELECTION_BLANK,
    blockId: 1
  }

  var state = {selected: {
                            type: 'NOT NEW'
                          }
              }
  
  var state_rta = {
                    selected: { 
                                type: 'NOT NEW'
                              }
                               
                  }

  var rta = ui(state, action)
  
  expect(rta).toEqual(state_rta)
});

it('Test reducer with ACTION_SELECTION_MACHINE', () => {
  var action = {
    type: constants.ACTION_SELECTION_MACHINE,
    machine: 'StarterMachine',
    blockId: 1
  }
  var state = {
                  emptystate: true,
              }
  var state_rta = {
                    emptystate: true, 
                    selected: {
                      type: 'MACHINE',
                      machine: 'StarterMachine'
                    }
                               
                  }
  var rta = ui(state, action)
  expect(rta).toEqual(state_rta)
});

it('Test reducer with ACTION_ROTATE DOWN => LEFT', () => {
  var machine = new StarterMachine(1);
  machine.orientation = 'DOWN'
  var machine_orientation = new StarterMachine(1);
  machine_orientation.orientation = 'RIGHT'
  var action = {
    type: constants.ACTION_ROTATE,
    machine: machine,
    blockId: 1
  }
  var state = {
                  emptystate: true,
                  factory: [machine]
              }         
  var state_rta = {
                    emptystate: true, 
                    factory: [machine_orientation]                               
                  }
  state_rta.factory[machine.id] = machine
  var rta = ui(state, action)
  expect(rta).toEqual(state_rta)
});

