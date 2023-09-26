import { useCallback, useMemo, useContext } from 'react'
import ReactFlow, {
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Connection,
  Edge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import './custom_node.css'
import CustomNode from './CustomNode'
import { FlowContext } from './context/FlowContext'

const Flow = () => {
  const { nodes, setNodes, edges, setEdges } = useContext(FlowContext)

  const nodeType = useMemo(() => ({ customNode: CustomNode }), [])

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div className="col-span-3" style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        className="flow_board"
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeType}
      >
        <Background />
      </ReactFlow>
    </div>
  )
}

export default Flow
