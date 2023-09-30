import { useContext, useState } from 'react'
import { OAuthMusicContext } from './context/OAuthMusicContext'
import SearchList from './SearchList.tsx'
import { Track } from './services/music/interface.ts'
import React from 'react'

function Search() {
  const { login, logout } = useContext(OAuthMusicContext)
  const { search, token } = useContext(OAuthMusicContext)
  const [key, setKey] = useState<string>('')
  const [tracks, setTracks] = useState<Track[]>([])

  return (
    <div className="search rounded-lg bg-gray-100">
      {!token?.token ? (
        <button
          className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          onClick={login}
        >
          Login
        </button>
      ) : (
        <button
          className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          onClick={logout}
        >
          Logout
        </button>
      )}
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="col-span-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <button
        className="hover:bg-purple-700 col-span-1 col-span-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
        onClick={async () => {
          setTracks(await search(key))
        }}
      >
        Search
      </button>
      <hr className="my-2 h-px border-0 bg-light-purple" />
      <SearchList tracks={tracks} />
    </div>
  )
}

export default Search
