const constants = require('../constants')

export const selected = (machineType) => ({
  type: constants.ACTION_SELECTION,
  machine: machineType
})

export const added = (blockId) => ({
  type: constants.ACTION_ADDNEW,
  blockId: blockId
})

export const deleted = (blockId) => ({
  type: constants.ACTION_DELETE,
  blockId: blockId
})

export const tick = () => ({
  type: 'TICK'
})
