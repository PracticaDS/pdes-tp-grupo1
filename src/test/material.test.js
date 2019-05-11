import { Material, IronMaterial, LiquidGoldMaterial, LiquidDiamondMaterial, LiquidIronMaterial } from '../model/material'

it('Test create Material through construct', () => {
  const material = new Material('IRON')

  expect(material.name).toEqual('IRON')
})

it('Test create Material through createMaterial', () => {
  const material = Material.createMaterial('IRON')

  expect(material).toEqual(new IronMaterial())
  expect(material.name).toEqual('IRON')
})

it('Test IRON material transform', () => {
  const material = Material.createMaterial('IRON')

  var transform = material.transform()

  expect(transform).toEqual(new LiquidIronMaterial())
  expect(transform.name).toEqual('LIQUID_IRON')
})

it('Test DIAMOND material transform', () => {
  const material = Material.createMaterial('DIAMOND')

  var transform = material.transform()

  expect(transform).toEqual(new LiquidDiamondMaterial())
  expect(transform.name).toEqual('LIQUID_DIAMOND')
})

it('Test GOLD material transform', () => {
  const material = Material.createMaterial('GOLD')

  var transform = material.transform()

  expect(transform).toEqual(new LiquidGoldMaterial())
  expect(transform.name).toEqual('LIQUID_GOLD')
})
