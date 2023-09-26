import SearchList from './SearchList.tsx'
import { useContext, useState } from 'react'
import axios from 'axios'
import { SpotifyContext } from './context/SpotifyContext.tsx'
import { FlowContext } from './context/FlowContext.tsx'

const CLIENT_ID = '0350c90137454dc5a748549664e5ba75'
const REDIRECT_URI = 'http://localhost:5173'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

function Search() {
  const { token, logout } = useContext(SpotifyContext)
  const { nodes, setNodes } = useContext(FlowContext)

  const [searchKey, setSearchKey] = useState('')
  const [tracks, setTracks] = useState([])

  const searchTracks = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'track',
      },
    })
    console.log(data)
    setTracks(data.tracks.items)
  }

  return (
    <div className="search rounded-lg bg-gray-100">
      {!token ? (
        <a
          className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button
          className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          onClick={logout}
        >
          Logout
        </button>
      )}
      <form onSubmit={searchTracks} className="form grid grid-cols-6 gap-2">
        <input
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          className="col-span-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <button
          className="hover:bg-purple-700 col-span-1 col-span-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          type={'submit'}
        >
          Search
        </button>
      </form>
      <hr className="my-2 h-px border-0 bg-light-purple" />
      <SearchList nodes={nodes} setNodes={setNodes} tracks={tracks} />
    </div>
  )
}

export default Search
