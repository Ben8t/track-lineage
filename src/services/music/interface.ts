export type AccessToken = { token: string | undefined; expires: number }

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string
  track_number: number
  type: string
  uri: string
  audio_features: AudioFeatures
}

export interface AudioFeatures {
  acousticness: number
  analysis_url: string
  danceability: number
  duration_ms: number
  energy: number
  id: string
  instrumentalness: number
  key: number
  liveness: number
  loudness: number
  mode: number
  speechiness: number
  tempo: number
  time_signature: number
  track_href: string
  type: string
  uri: string
  valence: number
}

export interface Album {
  album_type: string
  artists: Artist[]
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  uri: string
}

export interface Artist {
  name: string
  type: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface IOAuthMusicProvider {
  clientId: string
  redirectUri: string
  authEndpoint: string

  search: (token: string, key: string) => Promise<Track[]>
}
