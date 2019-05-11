import { ui } from '../reducers/ui'
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

