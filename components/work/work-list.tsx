import { Work } from '@/models/work'
import { Box, Divider, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import WorkCard from './work-card'

interface Props {
  workList: Work[]
}

export const WorkList = ({ workList }: Props) => {
  return (
    <Box>
      {workList.map((item, index) => (
        <Fragment key={item.id}>
          <Box>
            <WorkCard work={item} />
            <Divider sx={{ my: 3 }} />
          </Box>
        </Fragment>
      ))}
    </Box>
  )
}
