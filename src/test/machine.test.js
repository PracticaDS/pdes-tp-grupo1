import { CrafterMachine } from '../model/machine'

it('Test machine properties', () => {
  const machine = new CrafterMachine()

  expect(machine.name).toEqual('CRAFTER')
  expect(machine.orientation).toEqual('DOWN')
  expect(machine.material).toEqual('')
});

it('Test machine rotate', () => {
  const machine = new CrafterMachine()
  machine.orientation = 'DOWN'
  machine.rotate()
  expect(machine.orientation).toEqual('RIGHT')
});

