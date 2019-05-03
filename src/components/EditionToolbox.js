import React from 'react'

import { DeleteEditor } from './DeleteEditor'

import './EditionToolbox.css'

const constants = require('../constants')

export const EditionToolbox = ({ onDeleted }) => {
  return (
    <div className='toolbox'>
      <h1 className='title'>Edición</h1>
      <div className='items'>
        <span onClick={() => onDeleted(constants.ACTION_DELETE)} ><DeleteEditor /></span>
      </div>
    </div>
  )
}