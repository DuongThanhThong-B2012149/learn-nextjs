import { LayoutProps } from '@/models/common'
import { Box, Container, Stack } from '@mui/material'
import Link from 'next/link'
import { Footer, Header } from '../common'

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      <Header />


      <Box component="main" flexGrow="1">
       
        <Box mt={2}>{children}</Box>
      </Box>
      <Footer />
    </Stack>
  )
}
