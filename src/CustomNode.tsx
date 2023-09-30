import { Handle, Position } from 'reactflow'

type NodeData = {
  image: string
  title: string
  artist: string
  key: string
  bpm: string
}

type Props = {
  data: NodeData
  isConnectable?: boolean
}

const CustomNode = ({ data, isConnectable }: Props) => {
  const { image, title, artist, key, bpm } = data
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
