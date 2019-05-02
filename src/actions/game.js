const constants = require('../constants')

export const selected = (machineType) => ({
  type: constants.ACTION_SELECTION,
  machine: machineType
})

export const added = (blockId) => ({
  type: constants.ACTION_ADDNEW,
  blockId: blockId
})
