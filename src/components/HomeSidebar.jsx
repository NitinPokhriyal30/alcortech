import {
  Assignment,
  BarChart,
  Campaign,
  CardGiftcard,
  Groups,
  Home,
  RecordVoiceOver,
} from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import * as React from 'react'

const myTheme = {
  sidebar: {
    bgcolor: '#5486e3',
    borderColor: '#3466c3',
  },
  header: {
    height: 75,
  },
}

export default function HomeSidebar({ ...props }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: myTheme.header.height,
        px: 1,
        py: 2,
        height: `calc(100vh - ${myTheme.header.height}px)`,
      }}
    >
      <Box
        sx={{
          height: '100%',
          bgcolor: myTheme.sidebar.bgcolor,
          borderRight: '1px solid',
          borderColor: myTheme.sidebar.borderColor,
          borderRadius: 3,
          p: 1.5,
          color: 'white',
        }}
      >
        <Stack direction="row" alignItems="center" gap={2} pb={2.5} borderBottom={1}>
          <img
            style={{
              width: '50px',
              height: '50px',
              borderRadius: 999,
              background: '#ccc',
            }}
          />

          <div>
            <Typography variant="body" fontWeight="600">
              Hi
            </Typography>
            <Typography variant="body2">Semand javed</Typography>
          </div>
        </Stack>

        <List>
          <ListItemButton>
            <Home sx={{ mr: 2 }} />
            <Typography variant="body2">Home</Typography>
          </ListItemButton>

          <ListItemButton>
            <CardGiftcard sx={{ mr: 2 }} />
            <Typography variant="body2">My Rewards</Typography>
          </ListItemButton>

          <ListItemButton>
            <Groups sx={{ mr: 2 }} />
            <Typography variant="body2"> My Team</Typography>
          </ListItemButton>
          <ListItemButton>
            <BarChart sx={{ mr: 2 }} />
            <Typography variant="body2">Analytics</Typography>
          </ListItemButton>
          <ListItemButton>
            <Campaign sx={{ mr: 2 }} />
            <Typography variant="body2">Campaigns</Typography>
          </ListItemButton>

          <ListItemButton LinkComponent={Link} to="/survey">
            <Assignment sx={{ mr: 2 }} />
            <Typography variant="body2">Survey</Typography>
          </ListItemButton>

          <ListItemButton>
            <RecordVoiceOver sx={{ mr: 2 }} />
            <Typography variant="body2">Voice Out</Typography>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}
