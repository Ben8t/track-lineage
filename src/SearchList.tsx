import { useContext } from 'react'
import { FlowContext } from './context/FlowContext'
import { Track } from './services/music/interface'
import React from 'react'

type Props = {
  tracks: Track[]
}
const SearchList: React.FC<Props> = ({ tracks }) => {
  const { nodes, setNodes } = useContext(FlowContext)
  
  function getKey(key) {
    switch (key) {
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
  

  const onSubmit = (track: Track) => {
    setNodes(
      nodes.concat({
        id: track.id,
        type: 'customNode',
        data: {
          title: track.name,
          artist: track.artists[0].name,
          bpm: track.audio_features.tempo,
          key: getKey(track.audio_features.key),
          image: track.album.images[0].url,
        },
        position: { x: 500, y: 25 },
      }),
    )
  }

  return (
    <div className="overflow-auto" style={{ width: '100%', height: '50rem' }}>
      {tracks.map((track) => (
        <div
          key={track.id}
          className="m-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
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
              onClick={() => onSubmit(track)}
            >
              Add Track
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchList
