class Update {
  constructor (machineId) {
    this.id = machineId
  }
}

export class CleanUpdate extends Update {
  execute (machine) {
    machine.material = null
    return machine.clone()
  }
}

export class TransportUpdate extends Update {
  constructor (machineId, material) {
    super(machineId)
    this.material = material
  }

  execute (machine) {
    machine.material = this.material
    return machine.clone()
  }
}
