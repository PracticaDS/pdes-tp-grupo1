export class Update {
  constructor (machineId) {
    this.id = machineId
  }

  execute (machine) {
    return machine.clone()
  }
}

export class CleanUpdate extends Update {
  execute (machine) {
    machine.material = []
    return machine.clone()
  }
}

export class TransportUpdate extends Update {
  constructor (machineId, material) {
    super(machineId)
    this.material = material
  }

  execute (machine) {
    machine.material.push(this.material)
    return machine.clone()
  }
}
