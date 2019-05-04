import React from 'react'
import FactoryBlock from '../containers/FactoryBlock'

import './Factory.css'

export class Factory extends React.Component {
  render () {
    return (
      <div className='factory'>
        { this.props.factory.map((block, k) => <FactoryBlock block={block} key={k} id={k} />) }
      </div>
    )
  }
}
