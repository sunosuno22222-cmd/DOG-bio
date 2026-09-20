import React from 'react';
import { Shuffle, SkipBack, SkipForward, Timer } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying?: boolean;
  isShuffle?: boolean;
  onTogglePlay?: () => void;
  onToggleShuffle?: () => void;
  onPrevTrack?: () => void;
  onNextTrack?: () => void;
  onOpenTimer?: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying = false,
  isShuffle = true,
  onTogglePlay,
  onToggleShuffle,
  onPrevTrack,
  onNextTrack,
  onOpenTimer,
}) => {
  return (
    <div id="spotify-player-controls" className="w-full px-6 py-2 z-20 flex items-center justify-between">
      {/* Shuffle Button with green active dot */}
      <button
        id="btn-shuffle"
        onClick={onToggleShuffle}
        className={`relative p-2 rounded-full transition-all active:scale-90 cursor-pointer ${
          isShuffle ? 'text-[#1ed760]' : 'text-white/70 hover:text-white'
        }`}
        title={isShuffle ? 'Ordem aleatória ativada' : 'Ativar ordem aleatória'}
      >
        <Shuffle className="w-5 h-5" />
        {isShuffle && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1ed760] rounded-full"></span>
        )}
      </button>

      {/* Previous Track */}
      <button
        id="btn-prev-track"
        onClick={onPrevTrack}
        className="p-2 text-white/90 hover:text-white active:scale-90 transition-transform cursor-pointer"
        title="Música anterior"
      >
        <SkipBack className="w-7 h-7 fill-white stroke-none" />
      </button>

      {/* Main Enter Button (Replaces Play/Pause) */}
      <button
        id="btn-enter"
        onClick={onTogglePlay}
        className="px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-sm tracking-wide uppercase shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Enter"
      >
        enter
      </button>

      {/* Next Track */}
      <button
        id="btn-next-track"
        onClick={onNextTrack}
        className="p-2 text-white/90 hover:text-white active:scale-90 transition-transform cursor-pointer"
        title="Próxima música"
      >
        <SkipForward className="w-7 h-7 fill-white stroke-none" />
      </button>

      {/* Sleep Timer */}
      <button
        id="btn-sleep-timer"
        onClick={onOpenTimer}
        className="p-2 text-white/70 hover:text-white active:scale-90 transition-all cursor-pointer"
        title="Timer de repouso"
      >
        <Timer className="w-5 h-5" />
      </button>
    </div>
  );
};
