import React from 'react'
import './App.css'

import MachineToolbox from './containers/MachineToolbox'
import Factory from './containers/Factory'
import EditionToolbox from './containers/EditionToolbox'

function App() {
  return (
    <div className='App'>
      <EditionToolbox />
      <MachineToolbox />
      <Factory />
    </div>
  )
}

export default App
