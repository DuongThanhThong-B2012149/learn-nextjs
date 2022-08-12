import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

const ParamsPage = (props: Props) => {
  const router = useRouter()
  return <div>ParamsPage: {JSON.stringify(router.query)}</div>
}

export async function getServerSideProps() {
  // Fake slow query
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    props: {},
  }
}

export default ParamsPage
