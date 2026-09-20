import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Check, UserPlus } from 'lucide-react';
import { ArtistInfo } from '../types';

interface ArtistCardProps {
  artist: ArtistInfo;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFollowing, setIsFollowing] = useState(artist.isFollowing);

  return (
    <div
      id="spotify-artist-card"
      className="w-[92%] mx-auto my-3 bg-[#242424]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-300 z-20"
    >
      {/* Header bar / Peek */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 flex items-center justify-between cursor-pointer select-none hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-bold text-base tracking-tight">
          Sobre o artista
        </span>
        <button
          className="text-white/70 hover:text-white p-1 rounded-full transition-colors"
          title={isExpanded ? 'Recolher' : 'Expandir'}
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Banner + Quick Info */}
      <div className="relative w-full h-36 overflow-hidden">
        <img
          src={artist.bannerUrl}
          alt={artist.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#242424]/40 to-transparent"></div>

        {/* Artist Name & Monthly Listeners Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-md">
                {artist.name}
              </span>
              <span className="bg-[#1ed760] text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold" title="Artista Verificado">
                ✓
              </span>
            </div>
            <p className="text-white/80 text-xs font-normal mt-0.5">
              {artist.monthlyListeners.toLocaleString('pt-BR')} ouvintes mensais
            </p>
          </div>

          {/* Follow / Following pill button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFollowing(!isFollowing);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-md ${
              isFollowing
                ? 'bg-transparent text-white border border-white/40 hover:border-white'
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            {isFollowing ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Seguindo</span>
              </>
            ) : (
              <>
                <UserPlus className="w-3.5 h-3.5" />
                <span>Seguir</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Bio & Popular Tracks */}
      {isExpanded && (
        <div className="p-4 space-y-4 border-t border-white/5 animate-fadeIn">
          {/* Bio paragraph */}
          <p className="text-white/80 text-xs leading-relaxed font-sans">
            {artist.bio}
          </p>

          {/* Popular Tracks */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider text-white/60 mb-2">
              Músicas mais populares
            </h4>
            <div className="space-y-2">
              {artist.popularTracks.map((pt, idx) => (
                <div
                  key={pt.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors text-xs text-white/90 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 font-mono w-4 text-center">
                      {idx + 1}
                    </span>
                    <span className="font-semibold">{pt.title}</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/50 text-[11px]">
                    <span>{pt.plays}</span>
                    <span>{pt.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
