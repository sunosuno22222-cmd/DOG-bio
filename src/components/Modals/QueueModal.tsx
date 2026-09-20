import React from 'react';
import { X, ListMusic, Play } from 'lucide-react';
import { Track } from '../../types';

interface QueueModalProps {
  isOpen: boolean;
  onClose: () => void;
  tracks: Track[];
  currentTrackId: string;
  onSelectTrack: (track: Track) => void;
}

export const QueueModal: React.FC<QueueModalProps> = ({
  isOpen,
  onClose,
  tracks,
  currentTrackId,
  onSelectTrack,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-[#181818] text-white rounded-t-2xl sm:rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ListMusic className="w-5 h-5 text-[#1ed760]" />
            <h3 className="font-bold text-base">Fila de reprodução</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tracks List */}
        <div className="space-y-2">
          {tracks.map((t, idx) => {
            const isPlaying = t.id === currentTrackId;
            return (
              <div
                key={t.id}
                onClick={() => {
                  onSelectTrack(t);
                  onClose();
                }}
                className={`p-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                  isPlaying
                    ? 'bg-[#1ed760]/20 border border-[#1ed760]/30'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/40 w-4 text-center">
                    {idx + 1}
                  </span>
                  <img
                    src={t.coverUrl}
                    alt={t.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <p className={`text-xs font-bold ${isPlaying ? 'text-[#1ed760]' : 'text-white'}`}>
                      {t.title}
                    </p>
                    <p className="text-[11px] text-white/60">{t.artist}</p>
                  </div>
                </div>

                {isPlaying ? (
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-3 bg-[#1ed760] animate-pulse rounded-xs"></span>
                    <span className="w-1 h-4 bg-[#1ed760] animate-pulse delay-75 rounded-xs"></span>
                    <span className="w-1 h-2 bg-[#1ed760] animate-pulse delay-150 rounded-xs"></span>
                  </div>
                ) : (
                  <Play className="w-4 h-4 text-white/40 hover:text-white" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
