import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Machine.css'

export const Machine = (props) => {
  const showMaterial = () => (
    props.machine.material.map((material) => <div className={`material ${material.name.toLowerCase()}`} >{material.content}</div>
    )
  )

  return (
    <div onClick={props.onClick} className={`machine ${props.machine.name.toLowerCase()} ${props.machine.orientation.toLowerCase()}`} >
      {showMaterial()}
    </div>
  )
}

Machine.propTypes = {
  machine: PropTypes.object.isRequired,
  onClick: PropTypes.func
}
