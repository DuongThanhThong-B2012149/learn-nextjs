import { getPostList } from '@/utils/posts'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

interface Props {
  posts: any[]
}

const BlogListPage = ({ posts }: Props) => {
  return (
    <div>
      <h1>BlogList Page</h1>
      {/* <ul>
        {posts.map((p: any) => (
          <Link href={`/posts/${p.id}`} key={p.id}>
            <li>{p.title}</li>
          </Link>
        ))}
      </ul> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  // Convert markdown file into javascript object
  const data = await getPostList()
  return {
    props: {},
  }
}

export default BlogListPage
