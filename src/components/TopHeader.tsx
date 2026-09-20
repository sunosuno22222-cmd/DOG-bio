import React from 'react';
import { MoreVertical } from 'lucide-react';

interface TopHeaderProps {
  playlistName: string;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ playlistName }) => {
  return (
    <div id="spotify-top-header" className="w-full flex items-center justify-between px-5 py-3 z-20 text-white select-none">
      {/* Spacer where Chevron used to be to keep center title balanced */}
      <div className="w-6 h-6"></div>

      {/* Center Playlist Title */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[10px] tracking-widest font-semibold text-white/70 uppercase">
          TOCANDO DA PLAYLIST
        </span>
        <span className="text-xs font-bold text-white tracking-tight mt-0.5">
          {playlistName}
        </span>
      </div>

      {/* Static Options Menu Icon (Non-clickable) */}
      <div className="p-1 text-white/80">
        <MoreVertical className="w-5 h-5" />
      </div>
    </div>
  );
};
