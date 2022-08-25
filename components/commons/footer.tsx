import { Facebook, Google, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import * as React from 'react'

export function Footer() {
  const socialList = [
    { icon: Facebook, url: 'https://google.com' },
    { icon: Google, url: 'https://google.com' },
    { icon: Twitter, url: 'https://google.com' },
    { icon: LinkedIn, url: 'https://google.com' },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
        {socialList.map((item: any, idx: number) => (
          <Box
            sx={{ color: '#000' }}
            href={item.url}
            key={idx}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Box>
  )
}
