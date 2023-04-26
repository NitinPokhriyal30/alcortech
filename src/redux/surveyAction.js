import { wait } from '../utils'
import { store } from './store'

async function fetchSurvey() {
  store.dispatch({ type: 'surveyLoading' })
  await wait(3000)
  const json = localStorage.getItem('SURVEY_LIST')
  const surveyList = JSON.parse(json)
  store.dispatch({ type: 'fetchSurveySuccessful', survey: surveyList })
}

async function removeSurvey(targetSurveyId) {
  store.dispatch({ type: 'surveyLoading' })
  await wait(1000)
  let json = localStorage.getItem('SURVEY_LIST') || '[]'
  const allSurvey = JSON.parse(json).filter((survey) => survey.id !== targetSurveyId)

  json = JSON.stringify(allSurvey)
  localStorage.setItem('SURVEY_LIST', json)

  store.dispatch({ type: 'removeSurveySuccessful', surveyId: targetSurveyId })
}

async function createSurvey(survey) {
  survey.id = Math.random().toString()

  store.dispatch({ type: 'surveyLoading' })
  await wait(2000)
  const allSurvey = JSON.parse(localStorage.getItem('SURVEY_LIST') || '[]')
  const isInLocalStorage = allSurvey.findIndex((x) => survey.id === x.id)
  if (isInLocalStorage !== -1) {
    allSurvey[isInLocalStorage] = survey
  } else {
    allSurvey.push(survey)
  }

  localStorage.setItem('SURVEY_LIST', JSON.stringify(allSurvey))

  store.dispatch({ type: 'createSurveySuccessful', list: allSurvey })
  return survey
}

export { fetchSurvey, removeSurvey, createSurvey }
