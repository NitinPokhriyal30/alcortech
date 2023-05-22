import { combineReducers, legacy_createStore as createStore } from 'redux'
import userReducer, { userInitialState } from './userReducer'
import { surveyReducer, surveyInitialState } from './surveyReducer'
import postReducer, { postInitialState } from './postReducer'

const rootReducer = combineReducers({ user: userReducer, survey: surveyReducer, post: postReducer })
const store = createStore(rootReducer, {
  user: userInitialState,
  survey: surveyInitialState,
  post: postInitialState,
})

export { store }
