import Box from '@mui/material/Box'
import * as React from 'react'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import { breakpoints, myTheme } from '../myTheme'
import RightSidebar from '../components/RightSidebar'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <main
      style={{
        backgroundColor: myTheme.paper.backgroundColor,
      }}
    >
      <MainNavbar setShowSidebar={setShowSidebar} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMd ? '270px 1fr auto' : '1fr auto',
        }}
      >
        <HomeSidebar {...{ showSidebar, setShowSidebar }} />
        <div style={{ height: '200vh' }}>Feed</div>

        <RightSidebar />
      </Box>
    </main>
  )
}
