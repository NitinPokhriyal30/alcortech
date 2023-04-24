import { Add, MoreVert } from '@mui/icons-material'
import { Box, Button, Card, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

export default function SurveyListPage({ ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [surveyList, setSurveyList] = React.useState(() => {
    const json = localStorage.getItem('SURVEY_LIST') || '{}'
    return JSON.parse(json)
  })

  function handleDeleteSurvey(targetSurveyId) {
    setSurveyList((prev) => {
      delete prev[targetSurveyId]
      const json = JSON.stringify(prev)
      localStorage.setItem('SURVEY_LIST', json)
      return { ...prev }
    })
  }

  return (
    <Box component="main" sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">All Survey</Typography>

        <Button
          LinkComponent={Link}
          sx={{ ml: 'auto' }}
          to="/survey/create"
          startIcon={<Add />}
          variant="outlined"
          size="small"
        >
          Create
        </Button>
      </Stack>

      <Stack gap={3} mt={3}>
        {Object.entries(surveyList).map(([id, { surveyInfo }]) => (
          <Card sx={{ p: 2 }} key={id}>
            <Stack justifyContent="space-between" gap={4} alignItems="flex-start" direction="row">
              <Link style={{ flex: 1 }} to={`/survey/create?id=${id}`}>
                <Typography mb={2} variant="h5">
                  {surveyInfo.title}
                </Typography>

                <Typography>{surveyInfo.description}</Typography>
              </Link>

              <IconButton onClick={(ev) => setAnchorEl(ev.currentTarget)}>
                <MoreVert />
              </IconButton>

              <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => handleDeleteSurvey(id)}>Delete</MenuItem>
              </Menu>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
