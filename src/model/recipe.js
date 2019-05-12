import { SwordMaterial } from './material'

export class SwordRecipe {
  constructor () {
    this.ingredients = ['IRON', 'IRON', 'IRON']
  }

  craft (materials) {
    const result = materials.filter(mat => this.ingredients.includes(mat.name))
    if (result.length >= this.ingredients.length) {
      return new SwordMaterial()
    }
  }
}
