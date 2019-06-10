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
        <input type='text' name='user' placeholder='Usuario...' onChange={event => (user = event.target.value)} />
        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

const GamesList = ({ onStartGame, createNewGame, games }) => {
  let newGameName = ''

  return (
    <div className='games-list'>
      <hr />
      <input type='text' name='newgame' placeholder='Nombre de la partida...' onChange={event => (newGameName = event.target.value)} />
      <button onClick={() => createNewGame(newGameName)}>Juego nuevo</button>
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
        console.log(error)
        axios.post(API + '/usuarios/' + user)
          .then(() => setGames([]))
          .catch(error => console.log(error))
      })
  }

  const createNewGame = (newGameName) => {
    if (!newGameName) {
      newGameName = 'Juego nuevo ' + Date.now()
    }
    axios.post(API + '/usuarios/' + user + '/fabricas', { name: newGameName })
      .then(() => setGame(newGameName))
  }

  if (game && user) {
    return <Redirect to={'/game/' + user + '/' + game} />
  } else {
    return (
      <div className='main-menu'>
        <h1>Bienvenido a Revolución Industrial</h1>
        <UserForm onSubmit={handleSubmit} />
        {games && <GamesList games={games} onStartGame={setGame} createNewGame={createNewGame} />}
      </div>
    )
  }
}
