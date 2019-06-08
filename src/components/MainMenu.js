import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { API } from '../constants'

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

const GamesList = ({ onStartGame, createNewGame, games }) => {
  return (
    <div className='games-list'>
      <button onClick={() => createNewGame()}>Juego nuevo</button>
      <p>Lista de juegos</p>
      {games.map(game => <button className='game-button' onClick={() => onStartGame(game.name)}>{game.name}</button>)}
    </div>
  )
}

export const MainMenu = () => {
  let [games, setGames] = useState()
  let [game, setGame] = useState()
  let [user, setUser] = useState()

  const handleSubmit = (event, user) => {
    event.preventDefault()
    setUser(user)
    axios.get(API + '/usuarios/' + user + '/fabricas')
      .then(result => setGames(result.data))
      .catch(error => {
        axios.post(API + '/usuarios/' + user)
          .then(() => setGames([]))
          .catch(error => console.log(error))
      })
  }

  const createNewGame = () => {
    const newGameName = 'Juego nuevo'
    axios.post(API + '/usuarios/' + user + '/fabricas', { name: newGameName })
      .then(() => setGame(newGameName))
  }

  if (game && user) {
    return <Redirect to={'/game/' + user + '/' + game} />
  } else {
    return (
      <div className='main-menu'>
        <UserForm onSubmit={handleSubmit} />
        {games && <GamesList games={games} onStartGame={setGame} createNewGame={createNewGame} />}
      </div>
    )
  }
}
