import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { legacy_createStore as createStore } from 'redux'
import userReducer, { userInitialState } from './redux/userReducer'

const store = createStore(userReducer, {user: userInitialState})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
