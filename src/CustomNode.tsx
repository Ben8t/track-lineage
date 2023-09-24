import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

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
        <label>{data.label}</label>
        <hr />
        <span>Key: {data.key}</span>
        <span>BPM: {data.bpm}</span>
        <span>Style: {data.style}</span>
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
