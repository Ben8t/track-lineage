import { FormEvent } from 'react'
import { Node } from 'reactflow'

type Props = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}
function SearchList({ nodes, setNodes, tracks }: Props) {
  function onSubmit(track, event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(track)
    setNodes(
      nodes.concat({
        id: track.id,
        type: 'customNode',
        data: {
          title: track.name,
          artist: track.artists[0].name,
          bpm: '110',
          key: 'Eb',
          style: 'Disco',
          image: track.album.images[0].url,
        },
        position: { x: 500, y: 25 },
      }),
    )
  }

  return (
    <div className="overflow-auto" style={{ width: '100%', height: '50rem' }}>
      {tracks.map((track) => (
        <div className="m-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <form
            className="form grid grid-cols-2"
            onSubmit={(e) => onSubmit(track, e)}
            key={track.id}
          >
            <div>
              <p
                className="font-mono font-normal text-purple dark:text-gray-400"
                key={track.name}
              >
                <img src={track.album.images[0].url} style={{ width: '50%' }} />
                {track.name}
              </p>
              <p
                className="font-mono font-normal text-purple dark:text-gray-400"
                key={track.artists[0].name}
              >
                {track.artists[0].name}
              </p>
            </div>
            <div>
              <button
                className="hover:bg-purple-700 col-span-1 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                type="submit"
              >
                Add Track
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  )
}

export default SearchList
