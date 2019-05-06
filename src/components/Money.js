import React from 'react'

const constants = require('../constants')

export const Money = ({ money }) => {
  return (
    <div className='money'>Dinero: ${money} </div>
  )
}