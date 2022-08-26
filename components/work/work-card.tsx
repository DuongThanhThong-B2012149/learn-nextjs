import { Work } from '@/models/work'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props {
  work: Work
}

const WorkCard = ({ work }: Props) => {
  return (
    // <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
    //   <Box width={{ xs: '100%', sm: '240px' }} flexShrink={0}>
    //     <Image src={work.thumbnailUrl} width={246} height={180} layout={'responsive'} alt="image" />
    //   </Box>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '240px' }} flexShrink={0}>
        <Image src={work.thumbnailUrl} width={246} height={180} layout={'responsive'} alt="image" />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={'bold'}>
          {work.title}
        </Typography>
        <Stack direction={'row'} alignItems="center" spacing={2} my={2}>
          <Chip color="secondary" label={new Date(Number(work.createdAt)).getFullYear()} />
          <Typography color="gray">{work.tagList.join(', ')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}

export default WorkCard
