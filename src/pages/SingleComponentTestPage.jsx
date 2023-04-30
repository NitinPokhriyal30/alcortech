import * as React from 'react'
import Button from '@mui/material/Button'
import SurveyPublishModal from '../components/SurveyPublishModal'

export default function SingleComponentTestPage({ ...props }) {
  const [show, setShow] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show</Button>

      <SurveyPublishModal open={show} onClose={() => setShow(false)}  />
    </div>
  )
}
