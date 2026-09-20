import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Track } from '../types';

interface TrackInfoProps {
  track: Track;
  onToggleLike?: () => void;
  onArtistClick?: () => void;
}

export const TrackInfo: React.FC<TrackInfoProps> = ({
  track,
  onToggleLike,
}) => {
  const [liked, setLiked] = useState<boolean>(track.liked);

  const handleLikeClick = () => {
    if (onToggleLike) onToggleLike();
    setLiked(!liked);
  };

  return (
    <div id="spotify-track-info" className="w-full px-6 py-2 z-20 flex items-center justify-between select-none">
      {/* Track metadata left column */}
      <div className="flex items-center gap-3 overflow-hidden pr-2">
        {/* Album thumbnail avatar */}
        <div className="w-11 h-11 rounded-md overflow-hidden shrink-0 shadow-sm border border-white/10">
          <img
            src={track.coverUrl}
            alt={track.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col min-w-0">
          {/* Track Title */}
          <h2 className="text-white font-bold text-lg tracking-tight truncate leading-snug">
            {track.title}
          </h2>

          {/* Artist + Explicit tag */}
          <div className="flex items-center gap-1.5 mt-0.5 text-white/70 text-xs font-normal">
            {track.explicit && (
              <span className="bg-[#a7a7a7]/30 text-[#b3b3b3] text-[9px] font-bold px-1 py-[0.5px] rounded-[2px] leading-none shrink-0 uppercase tracking-tighter">
                E
              </span>
            )}
            <span className="truncate">
              {track.artist}
            </span>
          </div>
        </div>
      </div>

      {/* Green Checkmark Liked Button */}
      <button
        id="btn-like-track"
        onClick={handleLikeClick}
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer ${
          track.liked
            ? 'bg-[#1ed760] text-black shadow-md shadow-[#1ed760]/20'
            : 'border-2 border-white/50 text-white hover:border-white'
        }`}
        title={track.liked ? 'Salvo na sua biblioteca' : 'Adicionar à biblioteca'}
      >
        {track.liked ? (
          <Check className="w-4 h-4 stroke-[3]" />
        ) : (
          <Plus className="w-4 h-4 stroke-[2.5]" />
        )}
      </button>
    </div>
  );
};
