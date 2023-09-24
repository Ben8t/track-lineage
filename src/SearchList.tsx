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
        type: "customNode",
        data: { label: node.data.label, bpm: node.data.bpm, key: node.data.key, style: node.data.style },
        position: { x: 500, y: 25 },
      }),
    )
  }

  return (
    <div className='overflow-auto' style={{ width: '100%', height: '20rem' }}>
      {node_library.map(node => (
        <div className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form className="form grid grid-cols-2" onSubmit={(e) => onSubmit(node, e)} key={node.id}>
            <div>
              <p className="font-mono font-normal text-purple dark:text-gray-400" key={node.data.label}>
                {node.data.label}
              </p>
            </div>
            <div>
              <button className="font-mono col-span-1 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">
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
