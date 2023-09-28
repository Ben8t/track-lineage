import React, { createContext, useEffect, useState } from 'react'
import { Edge, Node } from 'reactflow'
import { useDebounce } from 'use-debounce'

const FLOW_LOCALSTORAGE_KEY = 'flow'

type FlowStorage = {
  nodes: Node[]
  edges: Edge[]
}

type FlowContextProps = {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
  edges: Edge[]
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>
}

const initialFlowContext: FlowContextProps = {
  nodes: [],
  setNodes: () => {},
  edges: [],
  setEdges: () => {},
}

export const FlowContext = createContext<FlowContextProps>(initialFlowContext)

type FlowContextProviderProps = {
  children: React.ReactElement
}

const FlowContextProvider: React.FC<FlowContextProviderProps> = ({
  children,
}: FlowContextProviderProps) => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [debounceNodes] = useDebounce(nodes, 1000)
  const [debounceEdges] = useDebounce(edges, 1000)

  useEffect(() => {
    if (isLoaded) return

    const json = window.localStorage.getItem(FLOW_LOCALSTORAGE_KEY)
    if (!json) {
      console.log('no flow localstorage')
      setIsLoaded(true)
      return
    }

    try {
      const storage = JSON.parse(json) as FlowStorage
      setEdges(storage.edges)
      setNodes(storage.nodes)
      console.log('flow localstorage loaded')
    } catch (e) {
      console.error(e)
    }

    setIsLoaded(true)
  }, [isLoaded])

  useEffect(() => {
    if (!isLoaded) return

    console.log('update nodes/edges')
    const storage: FlowStorage = { nodes: debounceNodes, edges: debounceEdges }
    window.localStorage.setItem(FLOW_LOCALSTORAGE_KEY, JSON.stringify(storage))
  }, [debounceNodes, debounceEdges, isLoaded])

  return (
    <FlowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </FlowContext.Provider>
  )
}

export default FlowContextProvider
