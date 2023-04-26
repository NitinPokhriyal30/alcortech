import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SurveyPageContext } from '../SurveryCreatePage'
import { wait } from '../utils'

async function publishSurvey(dispatch, survey) {
  const params = new URLSearchParams(window.location.search)
  let _surveyId = params.get('id')
  const isNewSurvey = _surveyId == null
  if (isNewSurvey) {
    const id = Math.random().toString()
    _surveyId = id
  }

  survey.id = _surveyId;
  await wait(2000)
  const allSurvey = JSON.parse(localStorage.getItem('SURVEY_LIST') || '[]')
  const isInLocalStorage = allSurvey.findIndex(survey => survey.id === _surveyId)
  if (isInLocalStorage !== -1) {
    allSurvey[isInLocalStorage] = survey;
  } else {
    allSurvey.push(survey)
  }

  localStorage.setItem('SURVEY_LIST', JSON.stringify(allSurvey))

  return survey
}

export default function SurveyPublishModal({
  surveyInfo: _surveyInfo,
  onPublish,
  open,
  onClose,
  ...props
}) {
  const users = ['Sid', 'Nitin', 'User 1', 'User 2']
  const [form, dispatch] = React.useContext(SurveyPageContext)
  const [loading, setLoading] = React.useState('')
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [params, setParams] = useSearchParams()
  const [surveyInfo, setSurveyInfo] = React.useState(() => {
    const params = new URLSearchParams(window.location.search)
    const surveyId = params.get('id')
    const allSurvey = JSON.parse(localStorage.getItem('SURVEY_LIST') || '[]')
    const survey = allSurvey.find(survey => survey.id === surveyId)
    return survey || { title: '', description: '', visibleTo: [] }
  })

  async function handlePublish(ev) {
    try {
      ev.preventDefault()

      setLoading('saving_survey')
      setIsSuccess(false)
      surveyInfo.form = form
      const { id } = await publishSurvey(dispatch, surveyInfo)
      params.set('id', id)
      setParams(params)

      setLoading('')
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 2000)
    } catch (error) {
      console.log('SurveyCreatePage.handlePublish():', error)
      setLoading('')
    }
  }

  function inputProps(name) {
    return {
      name,
      onChange(ev) {
        setSurveyInfo((prev) => {
          prev[name] = ev.target.value
          return { ...prev }
        })
      },
      value: surveyInfo[name],
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Card
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          py: 2,
          px: 3,
          width: 'min(100%, 700px)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Publish Survey</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Stack mt={2} gap={2} component="form" onSubmit={handlePublish}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Survey Title"
            {...inputProps('title')}
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            name="description"
            label="Description"
            multiline
            minRows={3}
            maxRows={4}
            {...inputProps('description')}
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            select
            label="Visible to"
            {...inputProps('visibleTo')}
          >
            <MenuItem selected>All</MenuItem>

            {users.map((username) => (
              <MenuItem>{username}</MenuItem>
            ))}
          </TextField>

          <Box mt={4}>
            <Button variant="contained" type="submit" disabled={loading === 'saving_survey'}>
              {loading === 'saving_survey' ? 'Publish...' : isSuccess ? 'Published' : 'Publish'}
            </Button>
          </Box>
        </Stack>
      </Card>
    </Modal>
  )
}
