import React from 'react'

import { ButtonEdition } from './ButtonEdition'

import './EditionToolbox.css'

const constants = require('../constants')

export const EditionToolbox = ({ onDeleted, onRotate }) => {
  return (
    <div className='toolbox'>
      <h1 className='title'>Edición</h1>
      <div className='items'>
          <span className="delete" onClick={() => onDeleted()} ><ButtonEdition /></span>
          <span className="rotate" onClick={() => onRotate()} ><ButtonEdition /></span>
      </div>
    </div>
  )
}