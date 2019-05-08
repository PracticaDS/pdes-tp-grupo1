import React from 'react'
import PropTypes from 'prop-types'

import '../styles/DetailsToolBox.css'

export const DetailsToolBox = (props) => {
  const renderButtons = () => {
    if (props.selection && props.selection.type !== 'NEW') {
      return (
        <div className='buttons'>
          <div className='btn delete' onClick={() => props.onDeleted(props.selection.machine)} />
          <div className='btn rotate' onClick={() => props.onRotate(props.selection.machine)} />
          <div className='btn move' onClick={() => props.onMove(props.selection.machine)} />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className='details-toolbox'>
      <h1 className='title'>Edición</h1>
      <div className='content'>
        <MachineDetails machine={props.selection.machine} />
        {renderButtons()}
      </div>
    </div>
  )
}

DetailsToolBox.propTypes = {
  selection: PropTypes.object,
  money: PropTypes.number,
  onDeleted: PropTypes.func,
  onRotate: PropTypes.func,
  onMove: PropTypes.func
}

const MachineDetails = (props) => {
  if (props.machine) {
    return (
      <div className='machine-details'>
        <p>MACHINE: {props.machine.name}</p>
        <p>Precio: ${props.machine.price}</p>
      </div>
    )
  } else {
    return null
  }
}
