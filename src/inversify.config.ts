import { Container } from 'inversify'
import { IStorage } from './services/storage/interface'
import LocalStorageService from './services/storage/localStorage.service'

import 'reflect-metadata'

export const TYPES = {
  StorageService: Symbol('StorageService'),
}

const container = new Container()
container.bind<IStorage>(TYPES.StorageService).to(LocalStorageService)

export default container
