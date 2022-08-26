import { Post } from '@/models'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { format } from 'date-fns'
import PostItem from '../blog/post-item'
interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  )
}

export default PostCard
