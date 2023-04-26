import { Add, MoreVert, Schedule } from '@mui/icons-material'
import { Box, Button, Card, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import { fetchSurvey, removeSurvey } from '../redux/surveyReducer'

export default function SurveyListPage({ ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const survey = useSelector((state) => state.survey)
  const dispatch = useDispatch()
  const surveyList = survey.list

  useEffect(() => {
    fetchSurvey(dispatch)
  }, [])

  console.log(surveyList)

  return (
    <Box component="main" sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography variant="h6">All Survey</Typography>

        <Schedule
          sx={{
            ml: 'auto',
            color: 'gray',
            visibility: survey.isLoading ? 'visible' : 'hidden',
          }}
        />
        
        <Button
          LinkComponent={Link}
          to="/survey/create"
          startIcon={<Add />}
          variant="outlined"
          size="small"
        >
          Create
        </Button>
      </Stack>

      <Stack gap={3} mt={3}>
        {surveyList?.map(({ id, ...surveyInfo }) => (
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
                <MenuItem onClick={() => removeSurvey(dispatch, id)}>Delete</MenuItem>
              </Menu>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
