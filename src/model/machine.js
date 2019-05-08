import { IronMaterial } from './material'
import { TransportUpdate, CleanUpdate } from './modelUpdate'

export class BaseMachine {
  constructor (id) {
    this.id = id
    this.orientation = 'DOWN'
    this.material = ''
    this.price = 100
  }

  static createMachine (type, id) {
    switch (type) {
      case 'STARTER': return new StarterMachine(id)
      case 'SELLER': return new SellerMachine(id)
      case 'TRANSPORTER': return new TransporterMachine(id)
      case 'FURNACE': return new FurnaceMachine(id)
      case 'CRAFTER': return new CrafterMachine(id)
      default: return
    }
  }

  update () {
    return []
  }

  clone () {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  getNextMachineId () {
    const dirs = {DOWN: 8, RIGHT: 1, UP: -8, LEFT: -1}
    return this.id + dirs[this.orientation]
  }

  rotate () {
    const dirs = ['DOWN', 'RIGHT', 'UP', 'LEFT']
    const nextDir = (dirs.indexOf(this.orientation) + 1) % 4
    this.orientation = dirs[nextDir]
  }
}

export class StarterMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'STARTER'
    this.production = IronMaterial
    this.frequency = 3
    this.counter = 0
  }

  update () {
    this.counter++
    if (this.frequency === this.counter) {
      this.counter = 0
      return [new TransportUpdate(this.getNextMachineId(), new this.production())]
    }

    return []
  }
}

export class SellerMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'SELLER'
    this.profit = 0
  }

  update () {
    if (this.material) {
      this.profit = this.material.price
      return [new CleanUpdate(this.id)]
    } else {
      this.profit = 0
    }

    return []
  }
}

export class TransporterMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'TRANSPORTER'
  }

  update () {
    return this.material ? [new CleanUpdate(this.id), new TransportUpdate(this.getNextMachineId(), this.material)] : []
  }
}

export class FurnaceMachine extends BaseMachine {
  constructor () {
    super()
    this.name = 'FURNACE'
  }
}

export class CrafterMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'CRAFTER'
  }
}
