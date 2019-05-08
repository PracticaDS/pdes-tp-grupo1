export class Material {
  constructor (name) {
    this.name = name
    this.price = 100
  }

  static createMaterial (type) {
    switch (type) {
      case 'IRON': return new IronMaterial()
      case 'DIAMOND': return new DiamondMaterial()
      case 'GOLD': return new GoldMaterial()
      default: return
    }
  }
}

export class IronMaterial extends Material {
  constructor () {
    super('IRON')
  }
}

export class DiamondMaterial extends Material {
  constructor () {
    super('DIAMOND')
  }
}

export class GoldMaterial extends Material {
  constructor () {
    super('GOLD')
  }
}
