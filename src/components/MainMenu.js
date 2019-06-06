import React, { useState } from 'react'

import '../styles/MainMenu.css'

const UserForm = ({ onSubmit }) => {
  let user = ''

  return (
    <div id='user-form'>
      <form onSubmit={(e) => onSubmit(e, user)}>
        <input type='text' name='user' onChange={event => (user = event.target.value)} />
        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

const GamesList = ({ games }) => {
  return (
    <div className='games-list'>
      {games.map(game => <p>{game.name}</p>)}
    </div>
  )
}

export const MainMenu = () => {
  let [games, setGames] = useState()

  const handleSubmit = (event, user) => {
    event.preventDefault()
    setGames([{ name: user }])
  }

  return (
    <div className='main-menu'>
      <UserForm onSubmit={handleSubmit} />
      {games && <GamesList games={games} />}
    </div>
  )
}
