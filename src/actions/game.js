const constants = require('../constants')

export const selected = (machineType) => ({
  type: constants.ACTION_SELECTION,
  machine: machineType
})

export const added = (blockId) => ({
  type: constants.ACTION_ADDNEW,
  blockId: blockId
})

export const deleted = () => ({
  type: constants.ACTION_DELETE
})

export const rotate = () => ({
  type: constants.ACTION_ROTATE
})

export const tick = () => ({
  type: 'TICK'
})
