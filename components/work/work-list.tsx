import { Work } from '@/models'
import { Box, Divider, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { WorkCard } from './work-card'

interface Props {
  workList: Work[]
}

export const WorkList = ({ workList }: Props) => {
  return (
    <Box>
      {workList.map((work, index) => (
        <Fragment key={work.id}>
          <Box>
            <WorkCard work={work} />
            <Divider sx={{ my: 3 }} />
          </Box>
        </Fragment>
      ))}
    </Box>
  )
}
