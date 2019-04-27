import React from 'react';
import './App.css';

import MachineToolbox from './containers/MachineToolbox'
import { Factory } from './components/Factory';

function App() {
  return (
    <div className="App">
      <MachineToolbox />
      <Factory h={8} w={8} />
    </div>
  );
}

export default App;
