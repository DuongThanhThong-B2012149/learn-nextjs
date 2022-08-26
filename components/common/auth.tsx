import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

const Auth = ({ children }: Props) => {
  const router = useRouter()
  const { profile, firstLoading } = useAuth()
  useEffect(() => {
    if (!firstLoading && !(profile as any)?.username) router.push('/login')
  }, [router, profile, firstLoading])
  if (!(profile as any)?.username) return <p>Loading...</p>
  return <div>{children}</div>
}

export default Auth
