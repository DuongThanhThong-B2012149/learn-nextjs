import { useAuth } from '@/hooks/index'
import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Auth from '../commons/auth'

export const AdminLayout = ({ children }: LayoutProps) => {
  const { logout, profile } = useAuth()
  const router = useRouter()
  const handleLogoutClick = async () => {
    try {
      await logout()
      // console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('fail to get logout', error)
    }
  }
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        <div className="">Sidebar</div>
        <p>{JSON.stringify(profile)}</p>
        <button onClick={handleLogoutClick}>Logout</button>
        <Link href={'/'}>
          <a>Home</a>
        </Link>

        <Link href={'/about'}>
          <a>About</a>
        </Link>

        <div className="">{children}</div>
      </div>
    </Auth>
  )
}
