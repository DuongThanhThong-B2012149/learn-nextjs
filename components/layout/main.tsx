import { LayoutProps } from '@/models/common'
import { Box, Container } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Footer, Header } from '../commons'

export const MainLayout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log('MainLayout mounting')
    return () => console.log('MainLayout unmounting')
  }, [])
  return (
    <Stack minHeight={'100vh'}>
      <Header />
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: 'primary.main',
          maxWidth: '680px',
        }}
      >
        SM Container
      </Container>
      <Container
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        MD Container
      </Container>
      <Box component="main" flexGrow="1">
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>
        <Link href={'/works'}>
          <a>Works</a>
        </Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
