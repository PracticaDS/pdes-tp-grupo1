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
    selected: '',
    money: state.selected === constants.MACHINE_STARTER ? state.money - constants.STARTER_PRICE :
      state.selected === constants.MACHINE_SELLER ? state.money - constants.SELLER_PRICE :
        state.selected === constants.MACHINE_CRAFTER ? state.money - constants.CRAFTER_PRICE :
          state.selected === constants.MACHINE_FURNACE ? state.money - constants.FURNACE_PRICE :
            state.selected === constants.MACHINE_TRANSPORTER ? state.money - constants.TRANSPORTER_PRICE : state.money
  }
}

const haveEnoughMoney = (state) => {
  switch (state.selected) {
    case constants.MACHINE_STARTER:
      return state.money >= constants.STARTER_PRICE
    case constants.MACHINE_TRANSPORTER:
      return state.money >= constants.TRANSPORTER_PRICE
    case constants.MACHINE_CRAFTER:
      return state.money >= constants.CRAFTER_PRICE
    case constants.MACHINE_FURNACE:
      return state.money >= constants.FURNACE_PRICE
    case constants.MACHINE_SELLER:
      return state.money >= constants.SELLER_PRICE
    default:
      return true
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
      if (haveEnoughMoney(state)) {
        return addNewMachine(state, action.blockId)
      }
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
      if (state.toMove === true) {
        return {
          ...state,
          toMove: false
        }
      } else {
        return {
          ...state,
          toMove: true
        }
      }
    default:
      return state
  }
}
