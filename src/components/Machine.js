import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Machine.css'

export const Machine = (props) => {
  const showMaterial = () => (
    props.material ? <div className={`material ${props.material.toLowerCase()}`} /> : ''
  )

  return (
    <div className={`machine ${props.type.toLowerCase()} ${props.orientation.toLowerCase()}`} >
      {showMaterial()}
    </div>
  )
}

Machine.propTypes = {
  type: PropTypes.string.isRequired,
  material: PropTypes.string,
  orientation: PropTypes.oneOf(['DOWN', 'UP', 'LEFT', 'RIGHT'])
}

Machine.defaultProps = {
  orientation: 'DOWN'
}
