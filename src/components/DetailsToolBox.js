import React from 'react'

import { ButtonEdition } from './ButtonEdition'

import '../styles/DetailsToolBox.css'

const constants = require('../constants')

export const DetailsToolBox = ({ onDeleted, onRotate, money }) => {
  return (
    <div className='detailstoolbox'>
      <h3 className="detalles">Detalles</h3>
      <label className="money">Dinero: {money} </label>
    </div>
  )
}