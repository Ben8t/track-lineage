import React, { createContext, useCallback, useEffect, useState } from 'react'

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
  const [token, setToken] = useState<string>()

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    setToken(undefined)
  }, [setToken])

  useEffect(() => {
    if (token) return
    setToken(window.localStorage.getItem('token') || undefined)
  }, [token])

  useEffect(() => {
    if (!window.location.hash) return

    const token = window.location.hash
      .substring(1)
      .split('&')
      .find((e) => e.startsWith('access_token'))
      ?.split('=')[1]
    window.location.hash = ''

    if (token) window.localStorage.setItem('token', token)
    setToken(token)
  }, [setToken])

  return (
    <SpotifyContext.Provider value={{ token, logout }}>
      {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyContextProvider
