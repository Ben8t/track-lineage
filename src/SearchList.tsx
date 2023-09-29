import React from 'react'
import { FormEvent } from 'react'
import { Node } from 'reactflow'

type Props = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}

function getKey(key) {
  switch(key) {
    case 0:
      return 'C';
    case 1:
      return 'C#/Db';
    case 2:
      return 'D';
    case 3:
      return 'D#/Eb';
    case 4:
      return 'E';
    case 5:
      return 'F';
    case 6:
      return 'F#/Gb';
    case 7:
      return 'G';
    case 8:
      return 'G#/Ab';
    case 9:
      return 'A';
    case 10:
      return 'A#/Bb';
    case 11:
      return 'B'
    default:
      return 'KEY';
  }
}
function SearchList({ nodes, setNodes, tracks }: Props) {
  function onSubmit(track, event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNodes(
      nodes.concat({
        id: track.track.id,
        type: 'customNode',
        data: {
          title: track.track.name,
          artist: track.track.artists[0].name,
          bpm: track.features.tempo,
          key: getKey(track.features.key),
          image: track.track.album.images[0].url,
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
            key={track.track.id}
          >
            <div>
              <p
                className="font-mono font-normal text-purple dark:text-gray-400"
                key={track.track.name}
              >
                <img src={track.track.album.images[0].url} style={{ width: '50%' }} />
                {track.track.name}
              </p>
              <p
                className="font-mono font-normal text-purple dark:text-gray-400"
                key={track.track.artists[0].name}
              >
                {track.track.artists[0].name}
              </p>
              <p className="font-mono font-normal text-gray-800 dark:text-gray-400"
                key={track.features.tempo}
              >
                BPM: {track.features.tempo}
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
