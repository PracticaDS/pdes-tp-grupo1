import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Machine.css'

var classNames = require('classnames')

export const Machine = (props) => {
  const showMaterial = () => (
    props.machine.material.map((material) => {
      const classes = {
        material: true,
        [material.name.toLowerCase()]: true
      }

      return <div className={classNames(classes)} >
        <span className='content'>{material.content}</span>
      </div>
    })
  )

  const classes = {
    machine: true,
    [props.machine.name.toLowerCase()]: true,
    [props.machine.orientation.toLowerCase()]: true,
    working: props.machine.material.length > 0
  }

  return (
    <div onClick={props.onClick} className={classNames(classes)}>
      {showMaterial()}
    </div>
  )
}

Machine.propTypes = {
  machine: PropTypes.object.isRequired,
  onClick: PropTypes.func
}
