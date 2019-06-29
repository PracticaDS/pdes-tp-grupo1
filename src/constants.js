export const FACTORY_HEIGHT = 8
export const FACTORY_WIDTH = 8

export const BLOCK_EMPTY = 'BLOCK_EMPTY'
export const MACHINE_STARTER = 'STARTER'
export const MACHINE_SELLER = 'SELLER'
export const MACHINE_TRANSPORTER = 'TRANSPORTER'
export const MACHINE_FURNACE = 'FURNACE'
export const MACHINE_CRAFTER = 'CRAFTER'
export const MACHINE_TYPES = [MACHINE_STARTER, MACHINE_SELLER, MACHINE_TRANSPORTER, MACHINE_FURNACE, MACHINE_CRAFTER]

export const ACTION_SELECTION_NEW = 'ACTION_SELECTION_NEW'
export const ACTION_SELECTION_BLANK = 'ACTION_SELECTION_BLANK'
export const ACTION_SELECTION_MACHINE = 'ACTION_SELECTION_MACHINE'
export const ACTION_DELETE = 'ACTION_DELETE'
export const ACTION_ROTATE = 'ACTION_ROTATE'
export const ACTION_MOVE = 'ACTION_MOVE'

export const STARTER_PRICE = 100
export const SELLER_PRICE = 250
export const TRANSPORTER_PRICE = 50
export const FURNACE_PRICE = 300
export const CRAFTER_PRICE = 200

export const API = 'http://factory-grupo1:3001/api'

export const initialState = {
  factory: [...Array(FACTORY_HEIGHT * FACTORY_WIDTH)].map(() => null),
  selected: '',
  money: 1000
}
