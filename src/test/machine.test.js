import { CrafterMachine, StarterMachine, TransporterMachine, SellerMachine, FurnaceMachine } from '../model/machine'
import { IronMaterial, LiquidIronMaterial } from '../model/material'

it('Test machine properties', () => {
  const machine = new CrafterMachine()
  expect(machine.name).toEqual('CRAFTER')
  expect(machine.orientation).toEqual('DOWN')
  expect(machine.material).toEqual('')
})

it('Test machine with id', () => {
  const machine = new StarterMachine(2)
  expect(machine.name).toEqual('STARTER')
  expect(machine.id).toEqual(2)
})

it('Test machine rotate', () => {
  const machine = new CrafterMachine()
  machine.orientation = 'DOWN'
  machine.rotate()
  expect(machine.orientation).toEqual('RIGHT')
})

it('Starter machine: when a count of update is equals a frecuency, return a TransportUpdate wich Id is id machine + Dir', () => {
  const machine = new StarterMachine(3)
  machine.frecuency = 3
  machine.update()
  machine.update()
  var rta = machine.update()
  expect(rta[0].id).toEqual(11)
})

it('Transporter Machine update with material', () => {
  const machine = new TransporterMachine(3)
  machine.material = 'IRON'
  var rta = machine.update()
  expect(rta[0].id).toEqual(3)
  expect(rta[1].id).toEqual(11)
  expect(rta[1].material).toEqual('IRON')
})

it('Transporter Machine update without material', () => {
  const machine = new TransporterMachine(3)
  machine.material = ''
  var rta = machine.update()
  expect(rta).toEqual([])
})

it('Seller Machine update with material', () => {
  const machine = new SellerMachine(3)
  machine.material = { 'material': 'IRON', 'price': 100 }

  var rta = machine.update()

  expect(machine.profit).toEqual(100)
  expect(rta[0].id).toEqual(3)
})

it('Seller Machine update without material', () => {
  const machine = new SellerMachine(3)
  machine.material = ''

  var rta = machine.update()

  expect(machine.profit).toEqual(0)
  expect(rta).toEqual([])
})

it('Furnace Machine update with material', () => {
  const machine = new FurnaceMachine(3)
  machine.material = new IronMaterial()

  var rta = machine.update()

  expect(rta[0].id).toEqual(3)
  expect(rta[1].id).toEqual(11)
  expect(rta[1].material).toEqual(new LiquidIronMaterial())
})

it('Furnace Machine update without material', () => {
  const machine = new FurnaceMachine(3)
  machine.material = ''

  var rta = machine.update()

  expect(rta).toEqual([])
})
