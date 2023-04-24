import { Notifications, Search } from '@mui/icons-material'
import Box from '@mui/material/Box'
import * as React from 'react'
import logoSrc from '../assets/logo.png'
import high5Src from '../assets/high5.png'
import { IconButton, Stack } from '@mui/material'

export default function Header({ ...props }) {
  return (
    <Stack
      component="header"
      direction="row"
      sx={{
        position: 'sticky',
        top: 0,
        gap: 6,
        alignItems: 'center',
        height: 75,
        bgcolor: 'white',
      }}
    >
      <img src={logoSrc} height="50" />

      <Stack
        direction="row"
        sx={{
          color: '#555',
          backgroundColor: 'whitesmoke',
          alignItems: 'center',
          borderRadius: 999,
          py: 0.5,
          pl: 1,
          pr: 4,
          width: '100%',
          maxWidth: '300px',
          gap: 1,
          '&:focus-within': {
            outline: '1px solid',
          },
        }}
      >
        <Search />

        <input
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'inherit',
          }}
          type="text"
          placeholder="Search Users, Mentioned, Hashtags"
        />
      </Stack>

      <IconButton size="large" sx={{ ml: 'auto', color: '#555' }}>
        <Notifications />
      </IconButton>

      <img src={high5Src} height="50" />
    </Stack>
  )
}
