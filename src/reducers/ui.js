import { game } from './game';

const constants = require('../constants')

const addNewMachine = (state, blockId) => {
  if (state.selected === constants.ACTION_ROTATE) {
    const machine = state.factory[blockId]
    switch (machine.orientation) {
      case 'UP':
        state.factory[blockId] = {
          ...machine,
          orientation: 'RIGHT'
        }
        break
      case 'RIGHT':
        state.factory[blockId] = {
          ...machine,
          orientation: 'DOWN'
        }
        break
      case 'DOWN':
        state.factory[blockId] = {
          ...machine,
          orientation: 'LEFT'
        }
        break
      case 'LEFT':
        state.factory[blockId] = {
          ...machine,
          orientation: 'UP'
        }
        break
      default: 
        state.factory[blockId] = {
          ...machine,
          orientation: 'LEFT'
        }
    }


    return {
      ...state,
      factory: state.factory.slice(0)
    }
  }
  
  if (!state.selected) {
    return state
  }

  return {
    ...state,
    factory: state.factory.map((e, k) => k === blockId ? { type: state.selected, orientation: 'DOWN' } : e),
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
    default:
      return state
  }
}