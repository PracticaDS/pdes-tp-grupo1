import React from 'react'

import './Factory.css'

export class Factory extends React.Component {
  createBlocks = () => {
    let blocks = []
    for (let i = 1; i <= this.props.h; i++) {
      for (let j = 1; j <= this.props.w; j++) {
        blocks.push(<Block x={i} y={j} />)
      }
    }
    return blocks
  }

  render() {
    return (
      <div className="factory"> { this.createBlocks() } </div>
    )
  }
}

const Block = ({x}, {y}) => <div className='block'></div>
