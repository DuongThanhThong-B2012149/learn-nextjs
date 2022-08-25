import { Work } from '@/models'
import { Post } from '@/models/post'
import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { WorkList } from '../work'
import PostCard from './post-card'

interface Props {}

export const FeatureWork = (props: Props) => {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createdAt: '1661266762505',
      updatedAt: '1661266762505',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dehcucoor/image/upload/v1661405803/learn-nextjs/Rectangle_30_1_el8ene.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1661266762505',
      updatedAt: '1661266762505',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dehcucoor/image/upload/v1661405803/learn-nextjs/Rectangle_34_1_fuvxar.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1661266762505',
      updatedAt: '1661266762505',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dehcucoor/image/upload/v1661405802/learn-nextjs/Rectangle_32_1_gor9ts.jpg',
    },
  ]
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5">Recent Posts</Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
