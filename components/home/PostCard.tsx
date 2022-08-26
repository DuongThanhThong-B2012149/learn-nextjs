import { Post } from '@/models'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { format } from 'date-fns'
interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Box display="flex" my={2}>
          <Typography variant="body1">
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: 2,
            }}
          />
          <Typography variant="body1">{post.tagList.join(', ')}</Typography>
        </Box>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default PostCard
