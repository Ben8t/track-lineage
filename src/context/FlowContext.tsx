import React, { createContext, useEffect, useState } from 'react'
import { Edge, Node } from 'reactflow'
import { useDebounce } from 'use-debounce'
import useInjection from '../hooks/useInjection'
import { IStorage } from '../services/storage/interface'
import { TYPES } from '../inversify.config'

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
  const storage = useInjection<IStorage>(TYPES.StorageService)
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [debounceNodes] = useDebounce(nodes, 1000)
  const [debounceEdges] = useDebounce(edges, 1000)

  useEffect(() => {
    if (isLoaded) return

    const data = storage.get('flow')

    if (!data) {
      setIsLoaded(true)
      return
    }

    setNodes(data.nodes)
    setEdges(data.edges)

    setIsLoaded(true)
  }, [isLoaded, storage])

  useEffect(() => {
    if (!isLoaded || (debounceEdges.length === 0 && debounceNodes.length === 0))
      return

    console.log('update nodes/edges')
    storage.set('flow', { nodes: debounceNodes, edges: debounceEdges })
  }, [debounceNodes, debounceEdges, isLoaded, storage])

  return (
    <FlowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </FlowContext.Provider>
  )
}

export default FlowContextProvider
