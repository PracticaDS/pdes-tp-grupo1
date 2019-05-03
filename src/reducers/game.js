const constants = require('../constants')

const addNewMachine = (state, blockId) => {
  if (!state.selected) {
    return state
  }

  return {
    factory: state.factory.map((e, k) => k === blockId ? { type: state.selected } : e),
    selected: ''
  }
}

export const game = (state, action) => {
  switch (action.type) {
    case constants.ACTION_SELECTION:
      return {
        ...state,
        selected: action.machine
      }
    case constants.ACTION_ADDNEW:
      console.log(action.blockId)
      return addNewMachine(state, action.blockId)
    case constants.ACTION_DELETE:
      console.log(state.factory[0])
      return {
        ...state,
        selected: constants.BLOCK_EMPTY,
        machine: state[action.blockId]
      }
    default:
      return state
  }
}
