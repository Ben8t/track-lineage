import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useInjection from '../hooks/useInjection'
import { IStorage } from '../services/storage/interface'
import { TYPES } from '../types'
import {
  AccessToken,
  IOAuthMusicProvider,
  Track,
} from '../services/music/interface'

type OAuthMusicContextProps = {
  token: AccessToken | undefined
  login: () => void
  logout: () => void
  search: (key: string) => Promise<Track[]>
}

const initialOAuthMusicContext: OAuthMusicContextProps = {
  token: undefined,
  login: () => {},
  logout: () => {},
  search: () => Promise.resolve([]),
}

export const OAuthMusicContext = createContext<OAuthMusicContextProps>(
  initialOAuthMusicContext,
)

type OAuthMusicContextProviderProps = {
  children: React.ReactElement
}

const OAuthMusicContextProvider: React.FC<OAuthMusicContextProviderProps> = ({
  children,
}) => {
  const storage = useInjection<IStorage>(TYPES.StorageService)
  const service = useInjection<IOAuthMusicProvider>(
    TYPES.IOAuthMusicProviderService,
  )
  const { authEndpoint, clientId, redirectUri } = service
  const [accessToken, setToken] = useState<AccessToken>({
    token: undefined,
    expires: 0,
  })
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { token } = accessToken

  // TODO: verify expire

  const loginUri = useMemo(
    () =>
      `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`,
    [authEndpoint, clientId, redirectUri],
  )

  const search = useCallback(
    (key: string) => {
      if (token) return service.search(token, key)
      return Promise.resolve([])
    },
    [token, service],
  )

  const login = useCallback(() => {
    console.log('OAuth: login')
    window.location.assign(loginUri)
  }, [loginUri])

  const logout = useCallback(() => {
    console.log('OAuth: logout')
    setToken({ token: undefined, expires: 0 })
    storage.del('oauth')
  }, [storage])

  useEffect(() => {
    if (!window.location.hash) return

    console.log(window.location.hash)

    const params = new URLSearchParams(window.location.hash.substring(1))
    const newToken = params.get('access_token')
    const expires = params.get('expires_in')
    window.location.hash = ''

    const expiresTimestamp = Number(expires) * 1000 + new Date().getTime()

    if (newToken && newToken !== token)
      setToken({ token: newToken, expires: expiresTimestamp })
  }, [storage, token])

  useEffect(() => {
    if (isLoaded) return

    const storageToken = storage.get('oauth')
    setIsLoaded(true)

    if (!storageToken?.token) return

    setToken(storageToken)
  }, [isLoaded, storage])

  useEffect(() => {
    const storageToken = storage.get('oauth')

    if (!token || token === storageToken?.token) return

    console.log('token updated')
    storage.set('oauth', accessToken)
  }, [accessToken, service, storage, token])

  return (
    <OAuthMusicContext.Provider
      value={{ token: accessToken, login, logout, search }}
    >
      {children}
    </OAuthMusicContext.Provider>
  )
}

export default OAuthMusicContextProvider
