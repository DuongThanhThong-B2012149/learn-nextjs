import { useRouter } from 'next/router'
import * as React from 'react'
import { authApi } from '../api-client'
import { useAuth } from '../hooks'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })
  const handleLoginClick = async () => {
    try {
      await login()
      router.push('/about')
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  // const handleGetProfileClick = async () => {
  //   try {
  //     await authApi.getProfile()
  //   } catch (error) {
  //     console.log('fail to get profile', error)
  //   }
  // }
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('fail to get logout', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button style={{ margin: '2px' }} onClick={handleLoginClick}>
        Login
      </button>
      {/* <button style={{ margin: '2px' }} onClick={handleGetProfileClick}>
        Get profile
      </button> */}
      <button style={{ margin: '2px' }} onClick={handleLogoutClick}>
        Logout
      </button>
      <button style={{ margin: '2px' }} onClick={() => router.push('/about')}>
        Go to about
      </button>
    </div>
  )
}
