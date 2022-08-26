import { Post } from '@/models'
import { Box, Divider, Typography } from '@mui/material'

type Props = {
  post: Post
}

const PostItem = ({ post }: Props) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Box display="flex" my={2}>
        <Typography variant="body1">{post.publishedDate}</Typography>
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
    </Box>
  )
}

export default PostItem
