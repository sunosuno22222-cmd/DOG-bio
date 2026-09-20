import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Track } from './types';
import { INITIAL_TRACKS } from './data/mockData';

import { PhoneContainer } from './components/PhoneContainer';
import { TopHeader } from './components/TopHeader';
import { AlbumCover } from './components/AlbumCover';
import { TrackInfo } from './components/TrackInfo';
import { ProgressBar } from './components/ProgressBar';
import { PlayerControls } from './components/PlayerControls';
import { BottomToolbar } from './components/BottomToolbar';
import { AppIconsHeader } from './components/AppIconsHeader';
import { ProfileSection } from './components/ProfileSection';
import { MiniPlayerCard } from './components/MiniPlayerCard';
import { InfoCard } from './components/InfoCard';
import { AssistantButtonCard } from './components/AssistantButtonCard';

export default function App() {
  const [currentTrack] = useState<Track>(INITIAL_TRACKS[0]);
  const [playlistName] = useState<string>('DOG');
  const [isPlaying] = useState<boolean>(false);
  const [isShuffle] = useState<boolean>(true);
  const [currentTimeSeconds] = useState<number>(34);
  const [isEmptyScreenOpen, setIsEmptyScreenOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full min-h-screen bg-[#0d0d0f] font-sans antialiased text-white select-none">
      {/* Main Clean Static Spotify Mobile Player View */}
      <PhoneContainer bgImageUrl={currentTrack.coverUrl}>
        {/* Top Header (Centered: TOCANDO DA PLAYLIST - DOG) */}
        <TopHeader playlistName={playlistName} />

        {/* Scrollable Player Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col justify-between scrollbar-none py-2">
          {/* Center Square Album Cover (Exact Deboche Face Hoodie) */}
          <AlbumCover coverUrl={currentTrack.coverUrl} />

          {/* Track Info Bar (DOG - DOG [E] + Green Checkmark) */}
          <TrackInfo track={currentTrack} />

          {/* Scrub Timeline Progress Bar (0:34 / 1:34) */}
          <ProgressBar
            currentTimeSeconds={currentTimeSeconds}
            durationSeconds={currentTrack.durationSeconds}
          />

          {/* Media Controls Row - Play button opens empty screen with zoom transition */}
          <PlayerControls
            isPlaying={isPlaying}
            isShuffle={isShuffle}
            onTogglePlay={() => setIsEmptyScreenOpen(true)}
            onToggleShuffle={() => {}}
            onPrevTrack={() => {}}
            onNextTrack={() => {}}
            onOpenTimer={() => {}}
          />

          {/* Bottom Utility Toolbar */}
          <BottomToolbar
            onOpenDevices={() => {}}
            onOpenShare={() => {}}
            onOpenQueue={() => {}}
            activeDeviceName="Smartphone (Este dispositivo)"
          />
        </div>
      </PhoneContainer>

      {/* Empty Screen Overlay with subtle non-exaggerated zoom transition */}
      <AnimatePresence>
        {isEmptyScreenOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.91 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.91 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#121212] flex flex-col p-5 select-none overflow-hidden"
          >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <img
                src="https://raw.githubusercontent.com/b9791076-design/ICONS/main/b6f52eb88e3948dd4f77028830a96b75.jpg"
                alt="Background"
                className="w-full h-full object-cover filter blur-[2px] scale-105 opacity-80 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            </div>

            {/* Top Bar with Back Button */}
            <div className="w-full flex items-center justify-between pt-2 pb-2 relative z-10">
              <button
                onClick={() => setIsEmptyScreenOpen(false)}
                className="flex items-center gap-2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 active:scale-95 px-4 py-2 rounded-full transition-all cursor-pointer border border-white/20 text-sm font-semibold shadow-lg backdrop-blur-md"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </button>
            </div>

            {/* Screen Body with Profile Section, Icons, Mini Player, Info Card & Assistant Card at bottom */}
            <div className="flex-1 flex flex-col items-center justify-between pt-1 pb-2 relative z-10 overflow-y-auto overflow-x-hidden no-scrollbar">
              <div className="flex flex-col items-center w-full gap-2">
                <ProfileSection username="dog._xml" />
                <AppIconsHeader />
                <MiniPlayerCard />
                <InfoCard />
              </div>

              {/* Botão do assistente Dog lá no finalzinho */}
              <div className="w-full pt-4 pb-2">
                <AssistantButtonCard />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

