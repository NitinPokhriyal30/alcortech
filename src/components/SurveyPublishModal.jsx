import { Close } from '@mui/icons-material'
import { Box, Button, Card, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import XStack from './XStack'

export default function SurveyPublishModal({ open, onClose, ...props }) {
  const [params] = useSearchParams()
  const survey = useSelector((store) => store.survey)
  const surveyId = params.get('id')
  const surveyInfo = survey.list.find((x) => x.id === surveyId)

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
        <XStack justifyContent="space-between">
          <Typography variant="h6">Publish Survey</Typography>

          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </XStack>

        <Box component="form">
          <Typography>Title: {surveyInfo.title}</Typography>
          <Typography component="pre">Description: {surveyInfo.title}</Typography>

          <TextField select>
            <MenuItem>All</MenuItem>
          </TextField>

          <XStack>
            <Button type="submit">Publish</Button>
          </XStack>
        </Box>
      </Card>
    </Modal>
  )
}
