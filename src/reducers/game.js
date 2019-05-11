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
