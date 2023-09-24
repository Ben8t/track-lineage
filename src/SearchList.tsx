import { FormEvent } from 'react'
import { Node } from 'reactflow'
import node_library from './nodes'

type Props = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}
function SearchList({ nodes, setNodes }: Props) {
  function onSubmit(node, event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(node)
    setNodes(
      nodes.concat({
        id: node.id,
        type: 'customNode',
        data: {
          label: node.data.label,
          bpm: node.data.bpm,
          key: node.data.key,
          style: node.data.style,
        },
        position: { x: 500, y: 25 },
      }),
    )
  }

  return (
    <div className="overflow-auto" style={{ width: '100%', height: '20rem' }}>
      {node_library.map((node) => (
        <div className="m-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <form
            className="form grid grid-cols-2"
            onSubmit={(e) => onSubmit(node, e)}
            key={node.id}
          >
            <div>
              <p
                className="font-mono font-normal text-purple dark:text-gray-400"
                key={node.data.label}
              >
                {node.data.label}
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
