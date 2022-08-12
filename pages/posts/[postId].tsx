import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  post: any
}

const PostDetailPage = ({ post }: Props) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div
        style={{
          color: 'green',
          fontSize: '2rem',
        }}
      >
        Loading...
      </div>
    )
  }
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  console.log('\nGET STATIC PATHS')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    paths: data.data.map((p: any) => ({ params: { postId: p.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  console.log('\nGET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }
  const response = await fetch(`http://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}

export default PostDetailPage
