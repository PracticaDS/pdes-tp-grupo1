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

  transform () {
    return this
  }
}

export class IronMaterial extends Material {
  constructor () {
    super('IRON')
  }

  transform () {
    return new LiquidIronMaterial()
  }
}

export class LiquidIronMaterial extends Material {
  constructor () {
    super('LIQUID_IRON')
  }
}

export class DiamondMaterial extends Material {
  constructor () {
    super('DIAMOND')
  }

  transform () {
    return new LiquidDiamondMaterial()
  }
}

export class LiquidDiamondMaterial extends Material {
  constructor () {
    super('LIQUID_DIAMOND')
  }
}

export class GoldMaterial extends Material {
  constructor () {
    super('GOLD')
  }

  transform () {
    return new LiquidGoldMaterial()
  }
}

export class LiquidGoldMaterial extends Material {
  constructor () {
    super('LIQUID_GOLD')
  }
}
