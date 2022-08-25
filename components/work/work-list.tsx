import { Work } from '@/models'
import { Box, Divider, Typography } from '@mui/material'
import React, { Fragment } from 'react'

interface Props {
  workList: Work[]
}

export const WorkList = ({ workList }: Props) => {
  return (
    <Box>
      {workList.map((item, index) => (
        <Fragment key={item.id}>
          <Box>
            <Typography component="h1" variant="h6">
              {item.title}
            </Typography>
            <Divider sx={{ my: 3 }} />
          </Box>
        </Fragment>
      ))}
    </Box>
  )
}
