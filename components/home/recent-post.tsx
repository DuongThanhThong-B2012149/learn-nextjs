import { Post } from '@/models/post'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PostCard from './PostCard'

interface Props {}

const RecentPost = (props: Props) => {
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '2022-06-15T03:00:00Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      slug: '',
      publishedDate: '2022-06-15T03:00:00Z',
      tagList: ['Figma', 'Icon', 'Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          mb={2}
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref href={'/blog'}>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post, idx) => (
            <Box key={idx}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default RecentPost
