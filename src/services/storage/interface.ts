import { Edge, Node } from 'reactflow'

export type StorageKey = 'music' | 'flow'

export type StorageData = {
  flow: { nodes: Node[]; edges: Edge[] }
  music: { token: string }
}

export interface IStorage {
  get: <K extends StorageKey>(key: K) => StorageData[K] | undefined
  set: <K extends StorageKey>(key: K, data: StorageData[K]) => void
  del: <K extends StorageKey>(key: K) => void
}
