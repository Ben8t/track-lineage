import { Edge, Node } from 'reactflow'
import { AccessToken } from '../music/interface'

export type StorageKey = 'oauth' | 'flow'

export type StorageData = {
  flow: { nodes: Node[]; edges: Edge[] }
  oauth: AccessToken
}

export interface IStorage {
  get: <K extends StorageKey>(key: K) => StorageData[K] | undefined
  set: <K extends StorageKey>(key: K, data: StorageData[K]) => void
  del: <K extends StorageKey>(key: K) => void
}
