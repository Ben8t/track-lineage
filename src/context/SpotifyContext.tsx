import React, { createContext, useCallback, useEffect, useState } from 'react'
import useInjection from '../hooks/useInjection'
import { IStorage } from '../services/storage/interface'
import { TYPES } from '../inversify.config'

type SpotifyContextProps = {
  token: string | undefined
  logout: () => void
}

const initialSpotifyContext: SpotifyContextProps = {
  token: undefined,
  logout: () => {},
}

export const SpotifyContext = createContext<SpotifyContextProps>(
  initialSpotifyContext,
)

type SpotifyContextProviderProps = {
  children: React.ReactElement
}

const SpotifyContextProvider: React.FC<SpotifyContextProviderProps> = ({
  children,
}: SpotifyContextProviderProps) => {
  const storage = useInjection<IStorage>(TYPES.StorageService)
  const [token, setToken] = useState<string>()

  const logout = useCallback(() => {
    storage.del('music')
    setToken(undefined)
  }, [setToken, storage])

  useEffect(() => {
    if (token) return

    const data = storage.get('music')
    setToken(data?.token)
  }, [token, storage])

  useEffect(() => {
    if (!window.location.hash) return

    const token = window.location.hash
      .substring(1)
      .split('&')
      .find((e) => e.startsWith('access_token'))
      ?.split('=')[1]
    window.location.hash = ''

    if (token) storage.set('music', { token })
    setToken(token)
  }, [setToken, storage])

  return (
    <SpotifyContext.Provider value={{ token, logout }}>
      {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyContextProvider
