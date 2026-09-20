import React, { useState } from 'react';
import { X, Link2, Check, Share2, MessageSquare, Code } from 'lucide-react';
import { Track } from '../../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  track,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://open.spotify.com/track/shluzov-${track.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-[#181818] text-white rounded-t-2xl sm:rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#1ed760]" />
            <h3 className="font-bold text-base">Compartilhar</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Track Preview Card */}
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
          <img
            src={track.coverUrl}
            alt={track.title}
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <p className="font-bold text-sm text-white">{track.title}</p>
            <p className="text-xs text-white/60">{track.artist}</p>
          </div>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopy}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#1ed760]" /> : <Link2 className="w-4 h-4" />}
            <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-3 bg-green-600/30 hover:bg-green-600/40 text-green-300 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-3 bg-pink-600/30 hover:bg-pink-600/40 text-pink-300 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Instagram Stories</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>Incorporar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
