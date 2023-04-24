import Box from '@mui/material/Box'
import * as React from 'react'
import Header from '../components/Header'
import HomeSidebar from '../components/HomeSidebar'

export default function HomePage({ ...props }) {
  /* header */
  return (
    <>
      <Header />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '270px 1fr 200px',
          bgcolor: '#dedede',
        }}
      >
        <HomeSidebar />
        <main style={{ height: '200vh' }}></main>
        {
          // create post
          // (right side) user point
          // (right side) recommendation for you
        }
      </Box>
    </>
  )
}
