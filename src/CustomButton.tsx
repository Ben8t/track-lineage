import { useState, FormEvent } from 'react'
import { Node } from 'reactflow'

type Props = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
}
function CustomButton({ nodes, setNodes }: Props) {
  const [state, setState] = useState({
    id: '',
    name: '',
  })

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(state)
    setNodes(
      nodes.concat({
        id: state.id,
        data: { label: state.name },
        position: { x: 500, y: 100 },
      }),
    )
    console.log(nodes)
  }

  return (
    <div className="ml-8 mt-8 grid grid-cols-3">
      <form className="form mb-8 space-y-2" onSubmit={onSubmit}>
        <input
          id="id"
          placeholder="id"
          className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm"
          onChange={(event) => setState({ ...state, id: event.target.value })}
        />
        <input
          id="name"
          placeholder="name"
          className="text-gray-900 border-gray-300 focus:ring-blue-500 bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm font-bold"
          onChange={(event) => setState({ ...state, name: event.target.value })}
        />
        <button
          className="bg-primary-500 hover:bg-primary-700 text-gray-900 text-white rounded px-4 py-2 font-bold"
          type="submit"
        >
          Add Node
        </button>
      </form>
    </div>
  )
}

export default CustomButton
