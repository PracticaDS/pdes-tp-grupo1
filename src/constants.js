export const FACTORY_HEIGHT = 8
export const FACTORY_WIDTH = 8

export const BLOCK_EMPTY = 'BLOCK_EMPTY'
export const BLOCK_STARTER = 'BLOCK_STARTER'
export const BLOCK_SELLER = 'BLOCK_SELLER'
export const BLOCK_TRANSPORTER = 'BLOCK_TRANSPORTER'
export const BLOCK_FURNACE = 'BLOCK_FURNACE'
export const BLOCK_CRAFTER = 'BLOCK_CRAFTER'

export const ACTION_SELECTION = 'ACTION_SELECTION'
export const ACTION_ADDNEW = 'ACTION_ADDNEW'

export const initialState = {
  factory: [...Array(FACTORY_HEIGHT * FACTORY_WIDTH)].map(() => ({ type: BLOCK_EMPTY })),
  selected: ''
}
