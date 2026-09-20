import React from 'react';
import { X, Eye } from 'lucide-react';

interface OriginalScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalImageSrc: string;
}

export const OriginalScreenshotModal: React.FC<OriginalScreenshotModalProps> = ({
  isOpen,
  onClose,
  originalImageSrc,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-sm bg-[#181818] rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col items-center">
        {/* Header */}
        <div className="w-full px-4 py-3 bg-[#242424] flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2 text-white">
            <Eye className="w-4 h-4 text-[#1ed760]" />
            <span className="font-bold text-xs">Print Enviado Pelo Usuário</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-2 max-h-[80vh] overflow-y-auto">
          <img
            src={originalImageSrc}
            alt="Print Original"
            referrerPolicy="no-referrer"
            className="w-full rounded-xl object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
