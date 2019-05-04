const constants = require("../constants")

var registerChanges = []

const updateMachine = (machine, id) => {
  if (machine.type === constants.MACHINE_STARTER) {
    if (machine.material) {
      registerChanges.push({id, change: 'CLEAN'})
      registerChanges.push({id: id + 8, change: 'IRON'})
    } else {
      registerChanges.push({id, change: 'IRON'})
    }
  }

  if (machine.type === constants.MACHINE_TRANSPORTER) {
    if (machine.material) {
      registerChanges.push({id, change: 'CLEAN'})
      registerChanges.push({id: id + 8, change: 'IRON'})
    }
  }

  if (machine.type === constants.MACHINE_SELLER) {
    if (machine.material) {
      registerChanges.push({id, change: 'CLEAN'})
      registerChanges.push({id, change: 'ADD_MONEY'})
    }
  }
}

const apply = (state, change) => {
  const machine = state.factory[change.id]
  if (change.change === 'CLEAN') {
    state.factory[change.id] = {
      ...machine,
      material: ''
    }
  }

  if (change.change === 'IRON') {
    state.factory[change.id] = {
      ...machine,
      material: 'IRON'
    }
  }

  if (change.change === 'ADD_MONEY') {
    state.money = state.money + 100
  }

  return state
}

const tick = (state) => {
  state.factory.map((machine, id) => updateMachine(machine, id))
  const new_state = registerChanges.reduce((factory, change) => apply(factory, change), state)
  registerChanges = []
  return {  
    ...state,
    factory: new_state.factory.slice(0)
  }
}

export const game = (state, action) => {
  return tick(state)
}
