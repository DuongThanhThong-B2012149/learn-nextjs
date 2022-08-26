import { getPostList } from '@/utils/posts'
import { GetStaticProps, GetStaticPropsContext } from 'next'
interface BlogListPageProps {}

const BlogListPage = (props: BlogListPageProps) => {
  return (
    <div>
      <h1>Blog List Page</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // Server-side
  // Build time
  const data = await getPostList()
  return {
    props: {},
  }
}

export default BlogListPage
