import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Machine.css'

export const Machine = (props) => {
  const showMaterial = () => (
    props.machine.material ? <div className={`material ${props.machine.material.name.toLowerCase()}`} /> : ''
  )

  return (
    <div className={`machine ${props.machine.name.toLowerCase()} ${props.machine.orientation.toLowerCase()}`} >
      {showMaterial()}
    </div>
  )
}

Machine.propTypes = {
  machine: PropTypes.object.isRequired
}
