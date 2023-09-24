import { useState, useCallback } from 'react'
import ReactFlow, {
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Connection,
  Edge,
  Node,
} from 'reactflow'
import 'reactflow/dist/style.css'
import Search from './Search.js'
import './custom_node.css'
import CustomNode from './CustomNode.js'

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )
  return (
    <div className="m-2 grid grid-cols-4 gap-2">
      <div className="col-span-3" style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          className="flow_board"
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={{ customNode: CustomNode }}
        >
          <Background />
        </ReactFlow>
      </div>
      <div>
        <Search nodes={nodes} setNodes={setNodes} />
      </div>
    </div>
  )
}

export default Flow
