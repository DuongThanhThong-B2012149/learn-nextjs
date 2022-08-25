import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { format } from 'date-fns'

export interface Props {
  work: Work
}

export const WorkCard = ({ work }: Props) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '240px' }} flexShrink={0}>
        <Image src={work.thumbnailUrl} width={246} height={180} layout={'responsive'} alt="image" />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={'bold'}>
          {work.title}
        </Typography>
        <Stack direction="row" spacing={2} my={2}>
          <Chip
            size="small"
            color="secondary"
            label={new Date(Number(work.createdAt)).getFullYear()}
          />
          <Typography color="gray">{work.tagList.join(', ')}</Typography>
        </Stack>

        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
