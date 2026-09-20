import { Track, ArtistInfo, MemeSticker } from '../types';

const PROFILE_IMAGE_URL = 'https://raw.githubusercontent.com/b9791076-design/ICONS/main/90d59cc1dbdf4afacad1a14104a3262e.jpg';
const COVER_IMAGE_URL = 'https://raw.githubusercontent.com/b9791076-design/ICONS/main/artworks-BKh7nEA1d6IFIaqk-DKZyLw-t500x500.jpg';

export const INITIAL_TRACKS: Track[] = [
  {
    id: 'track-1',
    title: 'DOG',
    artist: 'DOG',
    artistId: 'artist-dog',
    album: 'DOG Single',
    playlistName: 'DOG',
    coverUrl: PROFILE_IMAGE_URL,
    artistBannerUrl: PROFILE_IMAGE_URL,
    durationSeconds: 128, // 2:08
    explicit: true,
    liked: true,
    bpm: 142,
    genre: 'Phonk / Hyperpop',
  },
];

export const SHLUZOV_ARTIST_INFO: ArtistInfo = {
  id: 'artist-shluzov',
  name: 'Shluzov',
  monthlyListeners: 348912,
  bio: 'Produtor independente de phonk, hyperpop e x-wave. Misturando nostalgia da internet dos anos 2000, batidas aceleradas e estética meme Y2K.',
  avatarUrl: PROFILE_IMAGE_URL,
  bannerUrl: PROFILE_IMAGE_URL,
  isFollowing: false,
  popularTracks: [
    { id: 'track-1', title: 'на моём х', plays: '4.829.102', duration: '2:08' },
    { id: 'p-2', title: 'Phonk City Walk', plays: '2.104.990', duration: '2:25' },
    { id: 'p-3', title: 'Y2K Nightfall', plays: '1.750.320', duration: '1:52' },
    { id: 'p-4', title: 'LOL VIBE (Phonk Edit)', plays: '984.110', duration: '2:25' },
    { id: 'p-5', title: 'Trollface Anthem', plays: '620.400', duration: '2:40' },
  ],
};

export const INITIAL_MEME_STICKERS: MemeSticker[] = [
  {
    id: 'sticker-troll',
    type: 'trollface',
    label: 'Trollface',
    x: 18,
    y: 18,
    scale: 1,
    rotation: -10,
    active: true,
  },
  {
    id: 'sticker-epic',
    type: 'epicsmile',
    label: 'Epic Face',
    x: 82,
    y: 42,
    scale: 1,
    rotation: 8,
    active: true,
  },
  {
    id: 'sticker-ascii-1',
    type: 'ascii',
    label: 'ASCII ^_\\^',
    x: 20,
    y: 58,
    scale: 1,
    rotation: 0,
    active: true,
  },
  {
    id: 'sticker-text-1',
    type: 'text',
    label: '(@_--_o)',
    x: 80,
    y: 18,
    scale: 1,
    rotation: -5,
    active: true,
  },
  {
    id: 'sticker-emojis',
    type: 'emojis',
    label: 'Emojis 👍🔥',
    x: 82,
    y: 58,
    scale: 1,
    rotation: 5,
    active: true,
  },
  {
    id: 'sticker-heart',
    type: 'heart',
    label: 'Heart & Sweats',
    x: 30,
    y: 35,
    scale: 1,
    rotation: 0,
    active: true,
  },
];
