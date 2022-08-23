import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

interface Props {
  children: any
}

const Auth = ({ children }: Props) => {
  const { profile, firstLoading } = useAuth()
  const router = useRouter()
  console.log(firstLoading)
  useEffect(() => {
    if (!firstLoading && !(profile as any)?.username) router.push('/login')
  }, [firstLoading, router, firstLoading])

  if (!(profile as any)?.username) return <p>Loading....</p>
  return <div>{children}</div>
}

export default Auth
