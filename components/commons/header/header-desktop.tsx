import { Box, Link as MuiLink } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { ROUTE_LIST } from './routes'

interface Props {}

export const HeaderDesktop = (props: Props) => {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent="flex-end">
          {ROUTE_LIST.map((route: any, index: number) => (
            <Link key={index} passHref href={route.path}>
              <MuiLink
                sx={{
                  ml: 2,
                }}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
