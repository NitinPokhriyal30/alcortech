import { wait } from '../utils'

const surveyInitialState = { isLoading: false, list: [] }
function surveyReducer(state = surveyInitialState, action) {
  switch (action.type) {
    case 'surveyLoading': {
      state.isLoading = true

      return { ...state }
    }
    case 'fetchSurveySuccessful': {
      state.isLoading = false
      state.list = action.survey

      return { ...state }
    }
    case 'fetchSurveyFailed': {
      state.isLoading = false

      return { ...state }
    }
    case 'createSurveySuccessful': {
      state.isLoading = false
      state.list = action.list

      return { ...state }
    }
    case 'removeSurveySuccessful': {
      state.isLoading = false
      state.list = state.list.filter((survey) => survey.id !== action.surveyId)

      return { ...state }
    }

    default:
      return state
  }
}

export { surveyReducer, surveyInitialState }
