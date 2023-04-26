import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SurveryCreatePage from './SurveryCreatePage'
import HomePage from './pages/HomePage'
import SurveyListPage from './pages/SurveyListPage'
import AdminNavbar from './components/AdminNavbar'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/survey"
          element={
            <>
              <AdminNavbar to="/survey" title="Survey Dashboard" />
              <Outlet />
            </>
          }
        >
          <Route index element={<SurveyListPage />}></Route>
          <Route path="/survey/create" element={<SurveryCreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
