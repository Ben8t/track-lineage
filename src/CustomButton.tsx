import { FormEvent } from 'react'
import { Node } from 'reactflow'
import node_library from './nodes'


type Props = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}
function CustomButton({ nodes, setNodes }: Props) {

  function onSubmit(node, event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(node)
    setNodes(
      nodes.concat({
        id: node.id,
        data: { label: node.data.label },
        position: { x: 500, y: 100 },
      }),
    )
  }

  return (
    <div className="ml-8 mt-8 grid grid-cols-3">
      {node_library.map(node => (
        <form className="form space-y-2" onSubmit={(e) => onSubmit(node, e)} key={node.id}>
          <span key={node.id}>
            ID: {node.id}, Label: {node.data.label}
          </span>
          <button
            className="bg-primary-500 hover:bg-primary-700 text-gray-900 text-white rounded px-4 py-2 font-bold"
            type="submit"
          >
            Add Node
          </button>
        </form>
      ))}
    </div>
  )
}

export default CustomButton
