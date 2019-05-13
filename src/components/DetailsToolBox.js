import React from 'react'
import PropTypes from 'prop-types'
import '../styles/DetailsToolBox.css'
import { SwordRecipe, TrophyRecipe } from '../model/recipe'

export const DetailsToolBox = (props) => {
  const renderButtons = () => {
    if (props.selection && props.selection.type !== 'NEW') {
      return (
        <div className='buttons'>
          <div className='btn delete' onClick={() => props.onDeleted(props.selection.machine)} />
          <div className='btn rotate' onClick={() => props.onRotate(props.selection.machine)} />
          <div className='btn move' onClick={() => props.onMove(props.selection.machine)} />
        </div>
      )
    } else {
      return null
    }
  }

  const renderMaterialSelection = () => {
    if (props.selection && props.selection.machine.production) {
      return (
        <div className='buttons-material'>
          <div className='btn iron' onClick={() => selectMaterial('IRON')} />
          <div className='btn diamond' onClick={() => selectMaterial('DIAMOND')} />
          <div className='btn gold' onClick={() => selectMaterial('GOLD')} />
        </div>
      )
    } else {
      return null
    }
  }

  const renderRecipeSelection = () => {
    if (props.selection.machine) {
      if (props.selection.machine.name === 'CRAFTER') {
        return (
          <div className='buttons-material'>
            <div className='btn iron' onClick={() => selectRecipe(new SwordRecipe())} />
            <div className='btn gold' onClick={() => selectRecipe(new TrophyRecipe())} />
          </div>
        )
      }
    } else {
      return null
    }
  }

  const selectMaterial = (material) => (props.selection.machine.production = material)
  const selectRecipe = (recipe) => (props.selection.machine.recipe = recipe)
  return (
    <div className='details-toolbox'>
      <h1 className='title'>Edición</h1>
      <div className='content'>
        <MachineDetails machine={props.selection.machine} />
        {renderMaterialSelection()}
        {renderRecipeSelection()}
        {renderButtons()}
      </div>
    </div>
  )
}

DetailsToolBox.propTypes = {
  selection: PropTypes.object,
  money: PropTypes.number,
  onDeleted: PropTypes.func,
  onRotate: PropTypes.func,
  onMove: PropTypes.func
}

const MachineDetails = (props) => {
  if (props.machine) {
    return (
      <div className='machine-details'>
        <p>MACHINE: {props.machine.name}</p>
        {props.machine.frequency ? <p>Frecuencia: {props.machine.frequency}</p> : ''}
        {props.machine.production ? <p>Producción: {props.machine.production}</p> : ''}
        <p>Precio: ${props.machine.price}</p>
      </div>
    )
  } else {
    return null
  }
}
