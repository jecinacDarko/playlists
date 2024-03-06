export interface Song {
  name: string;
  album: {
    images: { url: string }[];
  };
  artists: { name: string }[];
  isClicked?: boolean;
}

export interface SongCardProps {
  song: Song;
  onClick: () => void;
  isClicked?: boolean;
}

export interface AccessTokenResponse {
  access_token: string;
}

export interface CustomError extends Error {
  message: string;
}

export interface SongPortalProps {
}

export interface SpotifyTrack {
}

export interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyArtist {
  name: string;
}

export interface SpotifyImage {
  url: string;
}

export interface SpotifyAlbum {
  images: SpotifyImage[];
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
}

export interface ClickedSong {
    name: string;
    artist: string;
    album: string;
    isClicked: boolean;
}
