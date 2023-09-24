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
import Search from './Search.tsx'
import './custom_node.css'

import CustomNode from './CustomNode.tsx'
import Header from './Header.tsx'

const nodeTypes = { customNode: CustomNode }

const initialNodes: Node[] = []

const initialEdges: Edge[] = []

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

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
    <>
      <Header />
      <div className="m-2 grid grid-cols-4 gap-2">
        <div className="col-span-3" style={{ width: '100%', height: '100%' }}>
          <ReactFlow
            className="flow_board"
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <Search nodes={nodes} setNodes={setNodes} />
        </div>
      </div>
    </>
  )
}

export default Flow
