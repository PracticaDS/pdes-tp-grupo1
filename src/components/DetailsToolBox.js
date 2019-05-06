import React from 'react'

import { ButtonEdition } from './ButtonEdition'

import '../styles/DetailsToolBox.css'

const constants = require('../constants')

export const DetailsToolBox = ({ onDeleted, onRotate, onMove, machinePrice }) => {
  console.log(machinePrice)
  var price = ''
  switch (machinePrice) {
    case 'STARTER':
      price = 100
      break
    case 'SELLER':
      price = 250
      break
    case 'TRANSPORTER':
      price = 50
      break
    case 'FURNACE':
      price = 300
      break
    case 'CRAFTER':
      price = 200
      break
    default:
      price = ''
  }
  return (
    <div className='detailstoolbox'>
      <div className='toolbox2'>
        <h1 className='title'>Edición</h1>
        <div className='items'>
          <span className="delete" onClick={() => onDeleted()} ><ButtonEdition /></span>
          <span className="rotate" onClick={() => onRotate()} ><ButtonEdition /></span>
          <span className="move" onClick={() => onMove()} ><ButtonEdition /></span>
          <span className="price">Precio: {price}</span>
        </div>
      </div>
    </div>
  )
}