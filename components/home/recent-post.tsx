import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import PostCard from './post-card'

interface Props {}

export const RecentPost = (props: Props) => {
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          mb={2}
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={'center'}
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref href={'/blog'}>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
