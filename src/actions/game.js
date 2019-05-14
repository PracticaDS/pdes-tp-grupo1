const constants = require('../constants')

export const newSelection = (machine) => ({
  type: constants.ACTION_SELECTION_NEW,
  machine: machine
})

export const blankSelection = (blockId) => ({
  type: constants.ACTION_SELECTION_BLANK,
  blockId: blockId
})

export const machineSelection = (machine) => ({
  type: constants.ACTION_SELECTION_MACHINE,
  machine: machine
})

export const deleted = (machine) => ({
  type: constants.ACTION_DELETE,
  machine
})

export const rotate = (machine) => ({
  type: constants.ACTION_ROTATE,
  machine
})

export const move = (machine) => ({
  type: constants.ACTION_MOVE,
  machine
})

export const selectRecipe = (recipe, machineId) => ({
  type: 'SELECT_RECIPE',
  recipe,
  id: machineId
})

export const tick = () => ({ type: 'TICK' })
