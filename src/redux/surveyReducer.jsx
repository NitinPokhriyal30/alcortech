import { wait } from '../utils'

export const surveyInitialState = { isLoading: false, list: [] }
export function surveryReducer(state = surveyInitialState, action) {
  switch (action.type) {
    case 'fetchSurveyLoading': {
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
      state.error = 'Failed to load survey'

      return { ...state }
    }
    case 'removeSurvey': {
      state.list = state.list.filter((survey) => survey.id !== action.surveyId)

      return { ...state }
    }

    default:
      return state
  }
}

export async function fetchSurvey(dispatch) {
  dispatch({ type: 'fetchSurveyLoading' })
  await wait(3000)
  const json = localStorage.getItem('SURVEY_LIST')
  const surveyList = JSON.parse(json)
  dispatch({ type: 'fetchSurveySuccessful', survey: surveyList })
}

export function removeSurvey(dispatch, targetSurveyId) {
  let json = localStorage.getItem('SURVEY_LIST') || '[]'
  const surveyList = JSON.parse(json).filter((survey) => survey.id !== targetSurveyId)

  json = JSON.stringify(surveyList)
  localStorage.setItem('SURVEY_LIST', json)

  dispatch({ type: 'removeSurvey', surveyId: targetSurveyId })
}
