import { Box, Card, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'

export default function SurveyListPage({ ...props }) {
  const [surveyIds, setSurveyIds] = React.useState(() => {
    const json = localStorage.getItem('SURVEY_ID_LIST') || '[]'
    return JSON.parse(json).filter(Boolean)
  })
  return (
    <Box component="main" sx={{ p: 2 }}>
      <Typography variant="h6" mb={3}>
        All Survey
      </Typography>

      <Stack gap={3}>
        {surveyIds.map((id) => (
          <Link to={`/survey/create?id=${id}`}>
            <Card sx={{ p: 2 }}>
              <Typography mb={2} variant="h5">
                Survey {id}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maxime.
                <br />
                ipsum dolor sit amet, consectetur adipisicin.
              </Typography>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
