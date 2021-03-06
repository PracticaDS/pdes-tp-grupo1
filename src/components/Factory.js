import React from 'react'
import FactoryBlock from '../containers/FactoryBlock'

import '../styles/Factory.css'

export class Factory extends React.Component {
  render () {
    var classFactory = 'factory'
    const toMove = this.props.toMove
    if (toMove) {
      classFactory = 'factory factory_disabled'
    }

    return (
      <div className={classFactory}>
        { this.props.factory.map((block, k) => <FactoryBlock machine={block} key={k} id={k} />) }
      </div>
    )
  }
}
