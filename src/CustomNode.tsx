import { Handle, Position } from 'reactflow'

type NodeData = {
  image: string
  title: string
  artist: string
  key: string
  bpm: string
  preview_url: string
}

type Props = {
  data: NodeData
  isConnectable?: boolean
}

const CustomNode = ({ data, isConnectable }: Props) => {
  const { image, title, artist, key, bpm, preview_url } = data
  return (
    <div className="text-updater-node shadow-md">
      <Handle
        type="target"
        position={Position.Left}
        id="target"
        isConnectable={isConnectable}
        className="h-3 w-3 bg-purple"
      />
      <div>
        <img src={image} style={{ width: '20%' }} />{' '}
        <span>
          {title} - {artist}
        </span>
        <hr className="my-2 h-px border-0 bg-light-purple" />
        <span>Key: {key}</span>
        <span>BPM: {bpm}</span>
        <audio style={{ width: '100%' }} controls>
          <source src={preview_url} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="source"
        isConnectable={isConnectable}
        className="h-3 w-3 bg-purple"
      />
    </div>
  )
}

export default CustomNode
