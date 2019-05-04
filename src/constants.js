export const FACTORY_HEIGHT = 8
export const FACTORY_WIDTH = 8

export const BLOCK_EMPTY = 'BLOCK_EMPTY'
export const MACHINE_STARTER = 'STARTER'
export const MACHINE_SELLER = 'SELLER'
export const MACHINE_TRANSPORTER = 'TRANSPORTER'
export const MACHINE_FURNACE = 'FURNACE'
export const MACHINE_CRAFTER = 'CRAFTER'
export const MACHINE_TYPES = [MACHINE_STARTER, MACHINE_SELLER, MACHINE_TRANSPORTER, MACHINE_FURNACE, MACHINE_CRAFTER]

export const ACTION_SELECTION = 'ACTION_SELECTION'
export const ACTION_ADDNEW = 'ACTION_ADDNEW'
export const ACTION_DELETE = 'ACTION_DELETE'
export const ACTION_ROTATE = 'ACTION_ROTATE'

export const initialState = {
  factory: [...Array(FACTORY_HEIGHT * FACTORY_WIDTH)].map(() => ({ type: BLOCK_EMPTY })),
  selected: '',
  money: 1000
}
