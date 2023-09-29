import { injectable } from 'inversify'
import { IOAuthMusicProvider, Track } from './interface'
import axios from 'axios'

type SearchResult = {
  tracks: { items: Track[] }
}

@injectable()
class SpotifyService implements IOAuthMusicProvider {
  public clientId: string = 'dd9b77b5b9d84bebbe346163d0275dfa'
  public redirectUri: string = 'http://localhost:5173/' // TODO: change this url
  public authEndpoint: string = 'https://accounts.spotify.com/authorize'
  private apiEndpoint: string = 'https://api.spotify.com/v1/'

  search = async (token: string, key: string) => {
    const { data } = await axios.get<SearchResult>(
      this.apiEndpoint + 'search',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: key,
          type: 'track',
        },
      },
    )

    return data.tracks.items
  }
}

export default SpotifyService
