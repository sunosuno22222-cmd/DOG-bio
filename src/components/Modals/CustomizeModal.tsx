import React from 'react';
import { X, Sparkles, RotateCcw, Smartphone, Monitor } from 'lucide-react';
import { Track, ViewMode } from '../../types';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track;
  playlistName: string;
  phoneTime: string;
  batteryLevel: number;
  showStickers: boolean;
  viewMode: ViewMode;
  onUpdateTrack: (updates: Partial<Track>) => void;
  onUpdatePlaylist: (name: string) => void;
  onUpdatePhoneTime: (time: string) => void;
  onUpdateBattery: (level: number) => void;
  onToggleStickers: (show: boolean) => void;
  onUpdateViewMode: (mode: ViewMode) => void;
  onResetDefaults: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  track,
  playlistName,
  phoneTime,
  batteryLevel,
  showStickers,
  viewMode,
  onUpdateTrack,
  onUpdatePlaylist,
  onUpdatePhoneTime,
  onUpdateBattery,
  onToggleStickers,
  onUpdateViewMode,
  onResetDefaults,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-md bg-[#1c1c1c] text-white rounded-2xl p-6 border border-white/10 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#1ed760]" />
            <h3 className="font-bold text-base">Personalizar Player</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-xs">
          {/* Track Title */}
          <div>
            <label className="block text-white/70 mb-1 font-semibold">
              Título da Música
            </label>
            <input
              type="text"
              value={track.title}
              onChange={(e) => onUpdateTrack({ title: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1ed760]"
            />
          </div>

          {/* Artist Name */}
          <div>
            <label className="block text-white/70 mb-1 font-semibold">
              Nome do Artista
            </label>
            <input
              type="text"
              value={track.artist}
              onChange={(e) => onUpdateTrack({ artist: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1ed760]"
            />
          </div>

          {/* Playlist Name */}
          <div>
            <label className="block text-white/70 mb-1 font-semibold">
              Nome da Playlist
            </label>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => onUpdatePlaylist(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1ed760]"
            />
          </div>

          {/* Status Bar Controls */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-white/70 mb-1 font-semibold">
                Horário no Celular
              </label>
              <input
                type="text"
                value={phoneTime}
                onChange={(e) => onUpdatePhoneTime(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1ed760]"
              />
            </div>
            <div>
              <label className="block text-white/70 mb-1 font-semibold">
                Bateria (%)
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={batteryLevel}
                onChange={(e) => onUpdateBattery(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1ed760]"
              />
            </div>
          </div>

          {/* Toggle Meme Overlay Stickers */}
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
            <div>
              <p className="font-semibold text-white">Adesivos Meme Y2K</p>
              <p className="text-[10px] text-white/50">Trollface, Epic Smile e ASCII art</p>
            </div>
            <button
              onClick={() => onToggleStickers(!showStickers)}
              className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                showStickers ? 'bg-[#1ed760]' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  showStickers ? 'translate-x-5 bg-black' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>

          {/* View Mode Switcher */}
          <div>
            <label className="block text-white/70 mb-1.5 font-semibold">
              Modo de Exibição
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onUpdateViewMode('phone-frame')}
                className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all ${
                  viewMode === 'phone-frame'
                    ? 'bg-[#1ed760]/20 border-[#1ed760] text-[#1ed760]'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Moldura de Celular</span>
              </button>
              <button
                onClick={() => onUpdateViewMode('full-screen')}
                className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all ${
                  viewMode === 'full-screen'
                    ? 'bg-[#1ed760]/20 border-[#1ed760] text-[#1ed760]'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Tela Cheia</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Print Original</span>
          </button>
          <button
            onClick={onClose}
            className="bg-[#1ed760] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-[#1ed760]/90 transition-colors cursor-pointer"
          >
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
};
