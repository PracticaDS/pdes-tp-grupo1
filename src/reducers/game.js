import { initialState, API } from '../constants'
import axios from 'axios'
import { BaseMachine } from '../model/machine'

var globalUpdates = []

const updateMachine = (machine, id) => {
  const changes = machine.update()
  globalUpdates = globalUpdates.concat(changes)
}

const apply = (state, update) => {
  const machineTarget = state.factory[update.id]
  if (!machineTarget) {
    return state
  }

  if (machineTarget.profit) {
    state.money = state.money + machineTarget.profit
    machineTarget.profit = 0
  }

  state.factory[update.id] = update.execute(machineTarget)

  return state
}

const tick = (state) => {
  state.factory.map((machine, id) => machine ? updateMachine(machine, id) : null)
  const newState = globalUpdates.reduce((state, change) => apply(state, change), state)
  globalUpdates = []

  return {
    ...state,
    factory: newState.factory.slice(0)
  }
}

export const game = (state, action) => {
  return tick(state)
}

export const init = (state, action) => {
  let newState = action.state.state
  if (!newState) {
    newState = initialState
  } else {
    newState.factory = newState.factory.map(factory => {
      if (factory) {
        return Object.assign(BaseMachine.createMachine(factory.name, factory.id), factory)
      }
      return factory
    })
  }

  return {
    ...newState,
    selected: ''
  }
}

export const save = (state, action) => {
  axios.put(API + '/usuarios/' + action.user + '/fabricas/' + action.game, {
    state
  })

  return state
}
