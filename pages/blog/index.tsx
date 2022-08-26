import PostItem from '@/components/blog/post-item'
import { MainLayout } from '@/components/layout'
import { Post } from '@/models'
import { getPostList } from '@/utils/posts'
import { Box, Divider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
interface BlogListPageProps {
  postList: Post[]
}

const BlogListPage = ({ postList }: BlogListPageProps) => {
  return (
    <Box>
      <Container>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Blog{' '}
        </Typography>
        <Box
          component={'ul'}
          sx={{
            listStyle: 'none',
          }}
        >
          {postList.map((post, idx) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a style={{ color: '#000' }}>
                  <PostItem post={post} />
                </a>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // Server-side
  // Build time
  const postList = await getPostList()
  return {
    props: {
      postList,
    },
  }
}

BlogListPage.Layout = MainLayout

export default BlogListPage
