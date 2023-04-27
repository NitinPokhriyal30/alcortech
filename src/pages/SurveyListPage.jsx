import { Add, Delete, Edit, Schedule } from '@mui/icons-material'
import { Box, Button, Card, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SurveyCreateModal from '../components/SurveyCreateModal'
import TopLoadingBar from '../components/TopLoadingBar'
import { fetchSurvey, removeSurvey } from '../redux/surveyAction'

export default function SurveyListPage({ ...props }) {
  const [modal, setModal] = React.useState('')
  const survey = useSelector((store) => store.survey)

  const surveyList = survey.list

  useEffect(() => {
    fetchSurvey()
  }, [])

  return (
    <>
      <TopLoadingBar loading={survey.isLoading} />

      <Box component="main" sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="h6">All Survey</Typography>

          <Button
            sx={{ ml: 'auto' }}
            onClick={() => setModal('CREATE_SURVEY')}
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
              <Stack justifyContent="space-between" alignItems="flex-start">
                <Typography mb={2} variant="h5">
                  {surveyInfo.title}
                </Typography>

                <Typography>{surveyInfo.description}</Typography>

                <Stack direction="row" mt={4} gap={1}>
                  <Button
                    startIcon={<Edit />}
                    variant="outlined"
                    LinkComponent={Link}
                    to={`/survey/create?id=${id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<Delete />}
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      if (confirm(`Are you sure to delete the "${surveyInfo.title}" survey.`))
                        removeSurvey(id)
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>

        <SurveyCreateModal open={modal === 'CREATE_SURVEY'} onClose={() => setModal('')} />
      </Box>
    </>
  )
}
