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
import { createSurvey } from '../redux/surveyAction'

const initialSurveyInfoState = { title: '', description: '' }

export default function SurveyCreateModal({ open, onClose }) {
  const [loading, setLoading] = React.useState('')
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [surveyInfo, setSurveyInfo] = React.useState(initialSurveyInfoState)

  async function handleCreate(ev) {
    try {
      ev.preventDefault()

      setLoading('saving_survey')
      setIsSuccess(false)
      surveyInfo.form = []
      await createSurvey(surveyInfo)
      setIsSuccess(true)
      setSurveyInfo(initialSurveyInfoState)

      setTimeout(() => onClose(), 300)
    } catch (error) {
      if (error.isAxiosError) {
        setError('Failed to create survey')
      }

      console.log('SurveyCreatePage.handlePublish():', error)
    } finally {
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

        <Stack mt={2} gap={2} component="form" onSubmit={handleCreate}>
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

          <Box mt={4}>
            <Button variant="contained" type="submit" disabled={loading === 'saving_survey'}>
              {loading === 'saving_survey' ? 'Create...' : isSuccess ? 'Created' : 'Create'}
            </Button>
          </Box>
        </Stack>
      </Card>
    </Modal>
  )
}