import React from 'react'

import { ButtonEdition } from './ButtonEdition'

import '../styles/DetailsToolBox.css'

const constants = require('../constants')

export const DetailsToolBox = ({ onDeleted, onRotate, onMove, machinePrice }) => {
  console.log(machinePrice)
  var price = {
    starter: 100,
    seller: 250,
    transporter: 50, 
    furnace: 300,
    crafter: 200
  }
  
  return (
    <div className='detailstoolbox'>
      <div className='toolbox2'>
        <h1 className='title'>Edición</h1>
        <div className='items'>
          <span className="delete" onClick={() => onDeleted()} ><ButtonEdition /></span>
          <span className="rotate" onClick={() => onRotate()} ><ButtonEdition /></span>
          <span className="move" onClick={() => onMove()} ><ButtonEdition /></span>
          <span className="price">Precio: {price[machinePrice.toLowerCase()]}</span>
        </div>
      </div>
    </div>
  )
}