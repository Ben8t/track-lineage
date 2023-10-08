import { injectable } from 'inversify'
import { IOAuthMusicProvider, Track } from './interface'
import axios from 'axios'

type SearchResult = {
  tracks: { items: Track[] }
}

@injectable()
class SpotifyService implements IOAuthMusicProvider {
  public clientId: string = '0350c90137454dc5a748549664e5ba75'
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
    const trackItems = data.tracks.items
    const trackFeaturesPromises = trackItems.map(async (item) => {
      const features = await this.get_track_features(token, item.id)
      item.audio_features = features
      return item
    })
    const trackFeatures = await Promise.all(trackFeaturesPromises)
    return trackFeatures
  }

  get_track_features = async (token: string, track_id: string) => {
    const response = await axios.get(
      `https://api.spotify.com/v1/audio-features/${track_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data
  }
}

export default SpotifyService
