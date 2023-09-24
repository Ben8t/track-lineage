import React, { createContext, useCallback, useEffect, useState } from 'react'

type AppContextProps = {
  spotifyToken: string
  logout: () => void
}

const initialAppContext: AppContextProps = {
  spotifyToken: '',
  logout: () => {},
}

export const AppContext = createContext<AppContextProps>(initialAppContext)

type AppContextProviderProps = {
  children: React.ReactElement
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  const [spotifyToken, setSpotifyToken] = useState<string>('')

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    setSpotifyToken('')
  }, [setSpotifyToken])

  useEffect(() => {
    if (spotifyToken) return
    setSpotifyToken(window.localStorage.getItem('token') || '')
  }, [])

  useEffect(() => {
    if (!window.location.hash) return

    const spotifyToken =
      window.location.hash
        .substring(1)
        .split('&')
        .find((e) => e.startsWith('access_token'))
        ?.split('=')[1] || ''
    window.location.hash = ''

    if (spotifyToken) window.localStorage.setItem('token', spotifyToken)
    setSpotifyToken(spotifyToken)
  }, [setSpotifyToken])

  return (
    <AppContext.Provider value={{ spotifyToken, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
