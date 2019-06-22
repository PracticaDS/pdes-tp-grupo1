import { SwordMaterial, TrophyMaterial, RingMaterial } from './material'

export class SwordRecipe {
  constructor () {
    this.name = 'SWORD'
    this.ingredients = ['IRON', 'IRON', 'IRON']
  }

  craft (materials) {
    const result = materials.filter(mat => this.ingredients.includes(mat.name))
    if (result.length >= this.ingredients.length) {
      return new SwordMaterial()
    }
  }
}

export class TrophyRecipe {
  constructor () {
    this.name = 'TROPHY'
    this.ingredients = ['GOLD', 'GOLD', 'GOLD']
  }

  craft (materials) {
    const result = materials.filter(mat => this.ingredients.includes(mat.name))
    if (result.length >= this.ingredients.length) {
      return new TrophyMaterial()
    }
  }
}

export class RingRecipe {
  constructor () {
    this.name = 'RING'
    this.ingredients = ['GOLD', 'GOLD', 'DIAMOND']
  }

  craft (materials) {
    const result = materials.filter(mat => this.ingredients.includes(mat.name))
    if (result.length >= this.ingredients.length) {
      return new RingMaterial()
    }
  }
}
