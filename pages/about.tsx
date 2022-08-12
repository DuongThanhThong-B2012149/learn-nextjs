// import dynamic from 'next/dynamic'
import Header from '@/components/commons/header'
import { MainLayout, AdminLayout, EmptyLayout } from '@/components/layout'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Props {}
// const Header = dynamic(() => import('@/components/commons/header'), { ssr: false })

const About = (props: Props) => {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log('About router', router.query)
  //   useEffect(() => {
  //     // Check query available .
  //   }, [])
  const page = router.query?.page
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      setPostList(data.data)
    })()
  }, [page])

  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <>
      About page
      <Header />
      <ul className="post-list">
        {postList.map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next page</button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  console.log('statis props')
  return {
    props: {},
  }
}

About.Layout = AdminLayout

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default About
