import { authApi } from 'api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    mutate,
    error,
  } = useSWR('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 100,
    ...options,
  })

  const firstLoading = profile === undefined && error === undefined

  const login = async () => {
    // 1. Login
    await authApi.login({
      username: 'test123123',
      password: '123123',
    })

    // 2. Call api to to update data because app got accessToken
    mutate() // Trigger api
  }
  const logout = async () => {
    await authApi.logout()
    await mutate({}, false) // Don't call api when having option false
  }
  return {
    profile,
    login,
    logout,
    firstLoading,
  }
}
