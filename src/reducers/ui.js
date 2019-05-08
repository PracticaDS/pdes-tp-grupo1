import { game } from './game'
import { BaseMachine } from '../model/machine'

const constants = require('../constants')

const addNewMachine = (state, blockId) => {
  if (state.selected === constants.ACTION_ROTATE) {
    const machine = state.factory[blockId]
    machine.rotate()
    state.factory[blockId] = machine.clone()

    return {
      ...state,
      factory: state.factory.slice(0)
    }
  }

  if (!state.selected) {
    return state
  }
  const newMachine = BaseMachine.createMachine(state.selected, blockId)
  if (newMachine.price > state.money) {
    return state
  }

  return {
    ...state,
    factory: state.factory.map((e, k) => k === blockId ? newMachine : e),
    selected: '',
    money: state.money - newMachine.price
  }
}

export const ui = (state, action) => {
  switch (action.type) {
    case constants.ACTION_SELECTION:
      return {
        ...state,
        selected: action.machine
      }
    case constants.ACTION_ADDNEW:
      return addNewMachine(state, action.blockId)
    case constants.ACTION_ROTATE:
      return {
        ...state,
        selected: constants.ACTION_ROTATE
      }
    case constants.ACTION_DELETE:
      return {
        ...state,
        selected: constants.BLOCK_EMPTY,
        machine: state[action.blockId]
      }
    case 'TICK':
      return game(state, action)
    case constants.ACTION_MOVE:
      return {
        ...state,
        toMove: state.toMove
      }
    default:
      return state
  }
}
