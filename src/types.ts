export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  album: string;
  playlistName: string;
  coverUrl: string;
  artistBannerUrl: string;
  durationSeconds: number;
  explicit: boolean;
  liked: boolean;
  bpm: number;
  genre: string;
}

export interface ArtistInfo {
  id: string;
  name: string;
  monthlyListeners: number;
  bio: string;
  avatarUrl: string;
  bannerUrl: string;
  isFollowing: boolean;
  popularTracks: {
    id: string;
    title: string;
    plays: string;
    duration: string;
  }[];
}

export interface MemeSticker {
  id: string;
  type: 'trollface' | 'epicsmile' | 'ascii' | 'text' | 'emojis' | 'heart';
  label: string;
  x: number; // percentage
  y: number; // percentage
  scale: number;
  rotation: number;
  active: boolean;
}

export type ViewMode = 'phone-frame' | 'full-screen';
