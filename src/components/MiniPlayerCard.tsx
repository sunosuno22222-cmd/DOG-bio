import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const YOUNG_GIRL_A_TRACK = {
  title: 'Young Girl A',
  artist: 'siinamota',
  coverUrl: 'https://raw.githubusercontent.com/b9791076-design/ICONS/main/artworks-BKh7nEA1d6IFIaqk-DKZyLw-t500x500.jpg',
  audioUrl: 'https://raw.githubusercontent.com/b9791076-design/ICONS/main/siinamota%20-%20Young%20Girl%20A%20_%20A.mp3',
};

export const MiniPlayerCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error('Audio playback failed:', err);
          setIsPlaying(false);
        });
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto mt-6 bg-white/10 border border-white/15 rounded-2xl p-2.5 px-3.5 flex items-center justify-between shadow-2xl backdrop-blur-md hover:bg-white/15 transition-all select-none">
      <audio
        ref={audioRef}
        src={YOUNG_GIRL_A_TRACK.audioUrl}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* Left: Thumbnail & Song Title */}
      <div className="flex items-center gap-3 overflow-hidden min-w-0">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-black/40 flex-shrink-0 border border-white/10">
          <img
            src={YOUNG_GIRL_A_TRACK.coverUrl}
            alt={YOUNG_GIRL_A_TRACK.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-0.5">
              <span className="w-0.5 h-3 bg-white animate-bounce rounded-full" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-4 bg-white animate-bounce rounded-full" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-2 bg-white animate-bounce rounded-full" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </div>

        {/* Title & Artist */}
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-white truncate tracking-wide">
            {YOUNG_GIRL_A_TRACK.title}
          </span>
          <span className="text-[10px] text-white/60 truncate font-medium">
            {YOUNG_GIRL_A_TRACK.artist}
          </span>
        </div>
      </div>

      {/* Right: Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0 ml-2"
        title={isPlaying ? 'Pausar' : 'Despausar'}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 fill-black stroke-none" />
        ) : (
          <Play className="w-4 h-4 fill-black stroke-none ml-0.5" />
        )}
      </button>
    </div>
  );
};
