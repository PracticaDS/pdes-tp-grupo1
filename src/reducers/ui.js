import { game } from './game'

const constants = require('../constants')

const addNewMachine = (state, blockId) => {
  if (state.selected.type !== 'NEW') {
    return state
  }
  const newMachine = state.selected.machine
  newMachine.id = blockId

  if (newMachine.price > state.money) {
    return state
  }

  return {
    ...state,
    factory: state.factory.map((e, k) => k === blockId ? newMachine : e),
    selected: { type: 'MACHINE', machine: newMachine },
    money: state.money - newMachine.price
  }
}

const rotateMachine = (state, machine) => {
  machine.rotate()
  state.factory[machine.id] = machine.clone()

  return {
    ...state,
    factory: state.factory.slice(0)
  }
}

const deleteMachine = (state, machine) => {
  state.factory[machine.id] = null

  return {
    ...state,
    selected: '',
    factory: state.factory.slice(0)
  }
}

export const ui = (state, action) => {
  switch (action.type) {
    case constants.ACTION_SELECTION_NEW:
      return {
        ...state,
        selected: { type: 'NEW', machine: action.machine }
      }
    case constants.ACTION_SELECTION_BLANK:
      return addNewMachine(state, action.blockId)
    case constants.ACTION_SELECTION_MACHINE:
      return {
        ...state,
        selected: { type: 'MACHINE', machine: action.machine }
      }
    case constants.ACTION_ROTATE:
      return rotateMachine(state, action.machine)
    case constants.ACTION_DELETE:
      return deleteMachine(state, action.machine)
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
