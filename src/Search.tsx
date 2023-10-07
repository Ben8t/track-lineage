import { useContext, useState } from 'react'
import { OAuthMusicContext } from './context/OAuthMusicContext'
import SearchList from './SearchList'
import { Track } from './services/music/interface'
import React from 'react'
import { FlowContext } from './context/FlowContext'
import { saveAs } from 'file-saver'

const Search: React.FC = () => {
  const { login, logout } = useContext(OAuthMusicContext)
  const { search, token } = useContext(OAuthMusicContext)
  const [key, setKey] = useState<string>('')
  const { nodes, edges, setNodes, setEdges } = useContext(FlowContext)
  const [tracks, setTracks] = useState<Track[]>([])

  const handleExport = () => {
    const data = {
      nodes: nodes,
      edges: edges,
    }
    const json = JSON.stringify(data)
    const blob = new Blob([json], { type: 'application/json' })
    saveAs(blob, 'track_lineage_export.json')
  }

  const fileInputRef = React.createRef()

  const handleImportButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleImport = (event: { target: { files: unknown[] } }) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const result = e.target?.result as string

        if (result) {
          const data = JSON.parse(result)

          if (data.nodes && data.edges) {
            setNodes(data.nodes)
            setEdges(data.edges)
            alert('Import successful!')
          } else {
            alert('Invalid file format. Please select a valid JSON file.')
          }
        } else {
          alert('Empty file or unable to read.')
        }
      } catch (error) {
        alert('Error parsing JSON. Please check the file format.')
      }
    }

    reader.readAsText(file)
  }

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
      <div>
        <button
          className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
          onClick={handleImportButtonClick}
        >
          Import
        </button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImport}
        />
      </div>

      <button
        className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
        onClick={handleExport}
      >
        Export
      </button>
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
