import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar'
import HomePage from './pages/HomePage'
import SurveryCreatePage from './pages/SurveryCreatePage'
import SurveyListPage from './pages/SurveyListPage'
import { store } from './redux/store'
import SingleComponentTestPage from './pages/SingleComponentTestPage'
import { fetchSurveyWithId } from './redux/surveyAction'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/test" element={<SingleComponentTestPage />} />
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
        <Route
          path="/survey/create"
          element={<SurveryCreatePage />}
        />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
