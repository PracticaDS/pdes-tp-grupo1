import { CrafterMachine, StarterMachine } from '../model/machine'

it('Test machine properties', () => {
  const machine = new CrafterMachine()

  expect(machine.name).toEqual('CRAFTER')
  expect(machine.orientation).toEqual('DOWN')
  expect(machine.material).toEqual('')
});

it('Test machine with id', () => {
  const machine = new StarterMachine(2)

  expect(machine.name).toEqual('STARTER')
  expect(machine.id).toEqual(2)
});

it('Test machine rotate', () => {
  const machine = new CrafterMachine()
  machine.orientation = 'DOWN'
  machine.rotate()
  expect(machine.orientation).toEqual('RIGHT')
});

it('Starter machine: when a count of update is equals a frecuency, return a TransportUpdate wich Id is id machine + Dir', () => {
  const machine = new StarterMachine(3)
  machine.frecuency = 3
  
  machine.update();
  machine.update();

  var rta = machine.update();
  
  expect(rta[0].id).toEqual(11)
});




