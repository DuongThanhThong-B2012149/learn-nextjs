import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

interface Props {
  posts: any[]
}

const PostListPage = ({ posts }: Props) => {
  return (
    <div>
      <ul>
        {posts.map((p: any) => (
          <Link href={`/posts/${p.id}`} key={p.id}>
            <li>{p.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  // console.log('statis props')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    props: {
      posts: data.data,
    },
  }
}

export default PostListPage
