class Material {
  constructor (name) {
    this.name = name
    this.price = 100
  }
}

export class IronMaterial extends Material {
  constructor () {
    super('IRON')
  }
}
