import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import { MainMenu } from './components/MainMenu'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { initialState } from './constants'
import { ui as reducer } from './reducers/ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={MainMenu} />
      <Route path='/game/:user/:factory' exact component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
