import SearchList from './SearchList.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CLIENT_ID = "0350c90137454dc5a748549664e5ba75"
const REDIRECT_URI = "http://localhost:5173"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

function Search({ nodes, setNodes }: Props) {

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const [searchKey, setSearchKey] = useState("")
  const [tracks, setTracks] = useState([])

  const searchTracks = async (e) => {
    e.preventDefault()
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "track"
      }
    })
    console.log(data)
    setTracks(data.tracks.items)

  }

  return (
    <div className="search bg-gray-100 rounded-lg">
      {!token ?
        <a className="mb-2 font-mono col-span-1 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
          to Spotify</a>
        : <button className="mb-2 font-mono col-span-1 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>}
      <form onSubmit={searchTracks} className="form grid grid-cols-6 gap-2">
        <input type="text" onChange={e => setSearchKey(e.target.value)} class="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button className="col-span-2 font-mono col-span-1 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type={"submit"}>Search</button>
      </form>
      <hr className='h-px my-2 bg-light-purple border-0' />
      <SearchList nodes={nodes} setNodes={setNodes} tracks={tracks} />
    </div>
  )
}

export default Search
