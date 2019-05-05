import React from 'react'

import { ButtonEdition } from './ButtonEdition'

import '../styles/DetailsToolBox.css'

const constants = require('../constants')

export const DetailsToolBox = ({ onDeleted, onRotate, money }) => {
  return (
    <div className='detailstoolbox'>
      <div className='details'>
        <h3 className="detalles">Detalles</h3>
        <label className="money">Dinero: {money} </label>
      </div>
      <div className='toolbox'>
        <h1 className='title'>Edición</h1>
        <div className='items'>
            <span className="delete" onClick={() => onDeleted()} ><ButtonEdition /></span>
            <span className="rotate" onClick={() => onRotate()} ><ButtonEdition /></span>
        </div>
      </div>
    </div>
  )
}