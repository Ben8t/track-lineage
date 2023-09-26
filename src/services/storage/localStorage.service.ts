import { injectable } from 'inversify'
import { IStorage, StorageData, StorageKey } from './interface'

@injectable()
class LocalStorageService implements IStorage {
  get = <K extends StorageKey>(key: K) => {
    const data = window.localStorage.getItem(key)

    if (!data) return undefined

    return JSON.parse(data) as StorageData[K]
  }

  set = <K extends StorageKey>(key: K, data: StorageData[K]) => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  del = <K extends StorageKey>(key: K) => {
    window.localStorage.removeItem(key)
  }
}

export default LocalStorageService
