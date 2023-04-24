import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { legacy_createStore as createStore } from 'redux'
import userReducer, { userInitialState } from './redux/userReducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SurveryCreatePage from './SurveryCreatePage'
import HomePage from './pages/HomePage'
import SurveyListPage from './pages/SurveyListPage'

const store = createStore(userReducer, { user: userInitialState })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyListPage />}></Route>
        <Route path="/survey/create" element={<SurveryCreatePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
