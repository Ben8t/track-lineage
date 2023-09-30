import 'reflect-metadata'

import { Container } from 'inversify'
import { IStorage } from './services/storage/interface'
import LocalStorageService from './services/storage/localStorage.service'
import { TYPES } from './types'
import SpotifyService from './services/music/spotify.service'
import { IOAuthMusicProvider } from './services/music/interface'

const container = new Container()
container.bind<IStorage>(TYPES.StorageService).to(LocalStorageService)
container
  .bind<IOAuthMusicProvider>(TYPES.IOAuthMusicProviderService)
  .to(SpotifyService)

export default container
