import { Box } from '@mui/material'
import * as React from 'react'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Box component="footer" py={2} textAlign="center">
      Header
    </Box>
  )
}
