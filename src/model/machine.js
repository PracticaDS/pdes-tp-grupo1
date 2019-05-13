import { Material } from './material'
import { Update, TransportUpdate } from './modelUpdate'
import { SwordRecipe, TrophyRecipe } from './recipe'

export class BaseMachine {
  constructor (id) {
    this.id = id
    this.orientation = 'DOWN'
    this.material = []
    this.price = 100
  }

  static createMachine (type, id) {
    switch (type) {
      case 'STARTER': return new StarterMachine(id)
      case 'SELLER': return new SellerMachine(id)
      case 'TRANSPORTER': return new TransporterMachine(id)
      case 'FURNACE': return new FurnaceMachine(id)
      case 'CRAFTER': return new CrafterMachine(id)
      default:
    }
  }

  update () {
    return []
  }

  clone () {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  getNextMachineId () {
    const dirs = { DOWN: 8, RIGHT: 1, UP: -8, LEFT: -1 }
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
    this.production = 'IRON'
    this.frequency = 3
    this.counter = 0
  }

  update () {
    this.counter++
    if (this.frequency === this.counter) {
      this.counter = 0
      return [new TransportUpdate(this.getNextMachineId(), Material.createMaterial(this.production))]
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
    this.profit = this.material.reduce((sum, material) => (sum + material.price), 0)
    this.material = []
    return [new Update(this.id)]
  }
}

export class TransporterMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'TRANSPORTER'
  }

  update () {
    const changes = []
    this.material.map(material => {
      return changes.push(new TransportUpdate(this.getNextMachineId(), material))
    })
    this.material = []
    changes.push(new Update(this.id))

    return changes
  }
}

export class FurnaceMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'FURNACE'
  }

  update () {
    const changes = []
    this.material.map(material => {
      return changes.push(new TransportUpdate(this.getNextMachineId(), material.transform()))
    })
    this.material = []
    changes.push(new Update(this.id))

    return changes
  }
}

export class CrafterMachine extends BaseMachine {
  constructor (id) {
    super(id)
    this.name = 'CRAFTER'
    this.recipe = new SwordRecipe()
  }

  update () {
    const product = this.recipe.craft(this.material)
    if (product) {
      this.material = []
      return [new Update(this.id), new TransportUpdate(this.getNextMachineId(), product)]
    }
    return []
  }
}
