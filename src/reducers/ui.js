import { game } from './game';

const constants = require('../constants')

const addNewMachine = (state, blockId) => {
  if (!state.selected) {
    return state
  }

  return {
    ...state,
    factory: state.factory.map((e, k) => k === blockId ? { type: state.selected } : e),
    selected: ''
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
    case constants.ACTION_DELETE:
      return {
        ...state,
        selected: constants.BLOCK_EMPTY,
        machine: state[action.blockId]
      }
    case 'TICK':
      return game(state, action)
    default:
      return state
  }
}
